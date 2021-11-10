import { queryType, stringArg } from 'nexus';

const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.user.findMany({
          orderBy: [{ email: 'asc' }]
        });
      }
    });

    t.field('me', {
      type: 'User',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, args, { prisma }) => {
        return await prisma.user.findUnique({ where: { id: String(args.id) } });
      }
    });

    t.list.field('regions', {
      type: 'Region',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.region.findMany({
          orderBy: [{ regName: 'asc' }, { regCode: 'asc' }]
        });
      }
    });

    t.field('region', {
      type: 'Region',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.region.findUnique({ where: { id: String(id) } });
      }
    });

    // t.list.field('exassersByExamSession', {
    //   type: 'Exasser',
    //   args: {
    //     examId: stringArg(),
    //     sessionId: stringArg()
    //   },
    //   resolve: async (_parent, { examId, sessionId }, { prisma }) => {
    //     return await prisma.exasser.findMany({
    //       where: {
    //         examId: String(examId),
    //         sessionId: String(sessionId)
    //       }
    //     });
    //   }
    // });

    // t.field('exassersByExamSessionSeries', {
    //   type: 'Exasser',
    //   args: {
    //     examId: stringArg(),
    //     sessionId: stringArg(),
    //     seriesId: stringArg()
    //   },
    //   resolve: async (_parent, { seriesId, examId, sessionId }, { prisma }) => {
    //     return (
    //       await prisma.exasser.findMany({
    //         where: {
    //           examId: String(examId),
    //           sessionId: String(sessionId),
    //           seriesId: String(seriesId)
    //         }
    //       })
    //     )[0];
    //   }
    // });

    // t.field('exasserByUniqueExamSessionSeries', {
    //   type: 'Exasser',
    //   args: {
    //     examSessionSeries: stringArg()
    //   },
    //   resolve: async (_parent, { examSessionSeries }, { prisma }) => {
    //     return await prisma.exasser.findUnique({
    //       where: {
    //         examSessionSeries: String(examSessionSeries)
    //       }
    //     });
    //   }
    // });

    // t.list.field('exassers', {
    //   type: 'Exasser',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.exasser.findMany();
    //   }
    // });

    // // t.field('exasser', {
    // //   type: 'Exasser',
    // //   args: {
    // //     id: stringArg()
    // //   },
    // //   resolve: async (_parent, { id }, { prisma }) => {
    // //     return await prisma.region.findUnique({ where: { id: String(id) } });
    // //   }
    // // });

    // t.list.field('halls', {
    //   type: 'Hall',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.hall.findMany({
    //       orderBy: [{ hallName: 'asc' }, { hallCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('hall', {
    //   type: 'Hall',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.hall.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('cenexasHalls', {
    //   type: 'CenexasHall',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.cenexasHall.findMany();
    //   }
    // });

    // t.field('cenexasHall', {
    //   type: 'CenexasHall',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.cenexasHall.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('hallsOfACenter', {
    //   type: 'Hall',
    //   args: {
    //     centerId: stringArg()
    //   },
    //   resolve: async (_parent, { centerId }, { prisma }) => {
    //     return await prisma.hall.findMany({
    //       where: {
    //         centerId: String(centerId)
    //       }
    //     });
    //   }
    // });

    // t.list.field('HallsOfACenexas', {
    //   type: 'CenexasHall',
    //   args: {
    //     centerExamSessionId: stringArg()
    //   },
    //   resolve: async (_parent, { centerExamSessionId }, { prisma }) => {
    //     return await prisma.cenexasHall.findMany({
    //       where: {
    //         centerExamSessionId: String(centerExamSessionId)
    //       }
    //     });
    //   }
    // });

    // t.field('exassersByRegID', {
    //   type: 'Registration',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.registration.findUnique({
    //       where: {
    //         id: String(id)
    //       }
    //     });
    //   }
    // });

    // t.list.field('registrations', {
    //   type: 'Registration',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.registration.findMany({
    //       orderBy: [{ candAnonymationCode: 'asc' }]
    //     });
    //   }
    // });

    // t.list.field('scoresOfARegistration', {
    //   type: 'Registration',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.registration.findMany({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.field('registration', {
    //   type: 'Registration',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.registration.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.field('candAnonymationRegistration', {
    //   type: 'Registration',
    //   args: {
    //     candAnonymationCode: stringArg()
    //   },
    //   resolve: async (_parent, { candAnonymationCode }, { prisma }) => {
    //     return await prisma.registration.findUnique({
    //       where: { candAnonymationCode: String(candAnonymationCode) }
    //     });
    //   }
    // });

    // t.list.field('centerRegisteredCandidates', {
    //   type: 'Registration',
    //   args: {
    //     centerExamSessionId: stringArg()
    //   },
    //   resolve: async (_parent, { centerExamSessionId }, { prisma }) => {
    //     return await prisma.registration.findMany({
    //       where: { centerExamSessionId: String(centerExamSessionId) }
    //     });
    //   }
    // });

    // t.field('registrationByCandAndCenexas', {
    //   type: 'Registration',
    //   args: {
    //     centerExamSessionId: stringArg(),
    //     candidateId: stringArg()
    //   },
    //   resolve: async (
    //     _parent,
    //     { centerExamSessionId, candidateId },
    //     { prisma }
    //   ) => {
    //     return (
    //       await prisma.registration.findMany({
    //         where: {
    //           centerExamSessionId: String(centerExamSessionId),
    //           candidateId: String(candidateId)
    //         }
    //       })
    //     )[0];
    //   }
    // });

    // t.list.field('centerCandidatesPerSeries', {
    //   type: 'Registration',
    //   args: {
    //     centerExamSessionId: stringArg(),
    //     seriesId: stringArg()
    //   },
    //   resolve: async (
    //     _parent,
    //     { centerExamSessionId, seriesId },
    //     { prisma }
    //   ) => {
    //     return await prisma.registration.findMany({
    //       where: {
    //         centerExamSessionId: String(centerExamSessionId),
    //         seriesId: String(seriesId)
    //       }
    //     });
    //   }
    // });

    // t.list.field('exams', {
    //   type: 'Exam',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.exam.findMany({
    //       orderBy: [{ examName: 'asc' }, { examCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('exam', {
    //   type: 'Exam',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.exam.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('sessions', {
    //   type: 'Session',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.session.findMany({
    //       orderBy: [{ sessionName: 'asc' }, { sessionCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('session', {
    //   type: 'Session',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.session.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('educTypes', {
    //   type: 'EducType',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.educType.findMany({
    //       orderBy: [{ educTypeName: 'asc' }, { educTypeCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('educType', {
    //   type: 'EducType',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.educType.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('grades', {
    //   type: 'Grade',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.grade.findMany({
    //       orderBy: [{ gradeName: 'asc' }, { gradeCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('grade', {
    //   type: 'Grade',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.grade.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('ranks', {
    //   type: 'Rank',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.rank.findMany({
    //       orderBy: [{ rankName: 'asc' }, { rankCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('rank', {
    //   type: 'Rank',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.rank.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('serieses', {
    //   type: 'Series',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.series.findMany({
    //       orderBy: [{ seriesName: 'asc' }, { seriesCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('series', {
    //   type: 'Series',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.series.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('candidateRegistrations', {
    //   type: 'Candidate',
    //   args: {
    //     candidateSecretCode: stringArg()
    //   },
    //   resolve: async (_parent, { candidateSecretCode }, { prisma }) => {
    //     return await prisma.candidate.findMany({
    //       where: { candidateSecretCode: String(candidateSecretCode) }
    //     });
    //   }
    // });

    // t.list.field('candidates', {
    //   type: 'Candidate',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.candidate.findMany({
    //       orderBy: [{ candidate1stName: 'asc' }, { candidate1stName: 'asc' }]
    //     });
    //   }
    // });

    // t.field('candidateRegistrationsBySecretCode', {
    //   type: 'Candidate',
    //   args: {
    //     candidateSecretCode: stringArg()
    //   },
    //   resolve: async (_parent, { candidateSecretCode }, { prisma }) => {
    //     return (
    //       await prisma.candidate.findMany({
    //         where: {
    //           candidateSecretCode: String(candidateSecretCode)
    //         }
    //       })
    //     )[0];
    //   }
    // });

    // t.field('candidate', {
    //   type: 'Candidate',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.candidate.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.field('cenexasExaminersByExaminerCES', {
    //   type: 'CenexasExaminer',
    //   args: {
    //     centerExamSessionId: stringArg(),
    //     examinerId: stringArg()
    //   },
    //   resolve: async (
    //     _parent,
    //     { examinerId, centerExamSessionId },
    //     { prisma }
    //   ) => {
    //     return (
    //       await prisma.cenexasExaminer.findMany({
    //         where: {
    //           examinerId: String(examinerId),
    //           centerExamSessionId: String(centerExamSessionId)
    //         }
    //       })
    //     )[0];
    //   }
    // });

    // t.list.field('ranksCenexasExaminers', {
    //   type: 'CenexasExaminer',
    //   args: {
    //     rankId: stringArg(),
    //     centerExamSessionId: stringArg()
    //   },
    //   resolve: async (_parent, { rankId, centerExamSessionId }, { prisma }) => {
    //     return await prisma.cenexasExaminer.findMany({
    //       where: {
    //         rankId: String(rankId),
    //         centerExamSessionId: String(centerExamSessionId)
    //       },
    //       include: {
    //         Examiner: true
    //       }
    //     });
    //   }
    // });

    // t.list.field('examiners', {
    //   type: 'Examiner',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.examiner.findMany({
    //       orderBy: [{ firstName: 'asc' }, { middleName: 'asc' }]
    //     });
    //   }
    // });

    // t.list.field('cenexasExaminerByExaminerSecretCode', {
    //   type: 'Examiner',
    //   args: {
    //     examinerSecretCode: stringArg()
    //   },
    //   resolve: async (_parent, { examinerSecretCode }, { prisma }) => {
    //     return await prisma.examiner.findMany({
    //       where: { examinerSecretCode: String(examinerSecretCode) },
    //       include: {
    //         cenexasExaminers: {
    //           include: {
    //             Examiner: true
    //           }
    //         }
    //       }
    //     });
    //   }
    // });

    // t.list.field('cenexasExaminers', {
    //   type: 'CenexasExaminer',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.cenexasExaminer.findMany();
    //   }
    // });

    // t.field('cenexasExaminer', {
    //   type: 'CenexasExaminer',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.cenexasExaminer.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('reportTypes', {
    //   type: 'ReportType',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.reportType.findMany();
    //   }
    // });

    // t.field('reportType', {
    //   type: 'ReportType',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.reportType.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('reports', {
    //   type: 'Report',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.report.findMany();
    //   }
    // });

    // t.field('report', {
    //   type: 'Report',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.report.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('cenexasReport', {
    //   type: 'Report',
    //   args: {
    //     centerExamSessionId: stringArg()
    //   },
    //   resolve: async (_parent, { centerExamSessionId }, { prisma }) => {
    //     return await prisma.report.findMany({
    //       where: { centerExamSessionId: String(centerExamSessionId) }
    //     });
    //   }
    // });

    // t.list.field('cenexasReportByExaminer', {
    //   type: 'Report',
    //   args: {
    //     cenexasExaminerId: stringArg()
    //   },
    //   resolve: async (_parent, { cenexasExaminerId }, { prisma }) => {
    //     return await prisma.report.findMany({
    //       where: { cenexasExaminerId: String(cenexasExaminerId) }
    //     });
    //   }
    // });

    // // t.list.field('cenexasReport', {
    // //   type: 'Report',
    // //   args: {
    // //     cenexasExaminerId: stringArg()
    // //   },
    // //   resolve: async (_parent, { cenexasExaminerId }, { prisma }) => {
    // //     return await prisma.report.findMany({
    // //       where: { cenexasExaminerId: String(cenexasExaminerId) }
    // //     });
    // //   }
    // // });

    // t.field('candidateBySecretCode', {
    //   type: 'Candidate',
    //   args: {
    //     candidateSecretCode: stringArg()
    //   },
    //   resolve: async (_parent, { candidateSecretCode }, { prisma }) => {
    //     return await prisma.candidate.findUnique({
    //       where: { candidateSecretCode: String(candidateSecretCode) }
    //     });
    //   }
    // });

    // t.field('examinerBySecretCode', {
    //   type: 'Examiner',
    //   args: {
    //     examinerSecretCode: stringArg()
    //   },
    //   resolve: async (_parent, { examinerSecretCode }, { prisma }) => {
    //     return await prisma.examiner.findUnique({
    //       where: { examinerSecretCode: String(examinerSecretCode) }
    //     });
    //   }
    // });

    // t.field('examinerByMatricule', {
    //   type: 'Examiner',
    //   args: {
    //     examinerMatricule: stringArg()
    //   },
    //   resolve: async (_parent, { examinerMatricule }, { prisma }) => {
    //     return await prisma.examiner.findUnique({
    //       where: { examinerMatricule: String(examinerMatricule) }
    //     });
    //   }
    // });

    // t.field('candidateByMatricule', {
    //   type: 'Candidate',
    //   args: {
    //     candidateMatricule: stringArg()
    //   },
    //   resolve: async (_parent, { candidateMatricule }, { prisma }) => {
    //     return await prisma.candidate.findUnique({
    //       where: { candidateMatricule: String(candidateMatricule) }
    //     });
    //   }
    // });

    // t.list.field('subjects', {
    //   type: 'Subject',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.subject.findMany({
    //       orderBy: [{ subjectName: 'asc' }, { subjectCode: 'asc' }]
    //     });
    //   }
    // });

    // t.field('subject', {
    //   type: 'Subject',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.subject.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('scores', {
    //   type: 'Score',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.score.findMany({
    //       orderBy: [{ subjectAve: 'asc' }, { coeff: 'asc' }]
    //     });
    //   }
    // });

    // t.field('score', {
    //   type: 'Score',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.score.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('attendances', {
    //   type: 'Attendance',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.attendance.findMany({
    //       orderBy: [{ createdAt: 'asc' }]
    //     });
    //   }
    // });

    // t.field('attendance', {
    //   type: 'Attendance',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.attendance.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('invigilations', {
    //   type: 'Invigilation',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.invigilation.findMany();
    //   }
    // });

    // t.list.field('examinersInvigilations', {
    //   type: 'Invigilation',
    //   args: {
    //     cenexasExaminerId: stringArg()
    //   },
    //   resolve: async (_parent, { cenexasExaminerId }, { prisma }) => {
    //     return await prisma.invigilation.findMany({
    //       where: { cenexasExaminerId: String(cenexasExaminerId) }
    //     });
    //   }
    // });

    // t.field('invigilation', {
    //   type: 'Invigilation',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.invigilation.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('timetables', {
    //   type: 'Timetable',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.timetable.findMany();
    //   }
    // });

    // t.field('timetable', {
    //   type: 'Timetable',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.timetable.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.field('timetableBySubjectExasser', {
    //   type: 'Timetable',
    //   args: {
    //     subjectExasser: stringArg()
    //   },
    //   resolve: async (_parent, { subjectExasser }, { prisma }) => {
    //     return await prisma.timetable.findUnique({
    //       where: { subjectExasser: String(subjectExasser) }
    //     });
    //   }
    // });

    // t.list.field('cenexasHallDistros', {
    //   type: 'CenexasHallDistro',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.cenexasHallDistro.findMany();
    //   }
    // });

    // t.list.field('hallsOfACenexasDistro', {
    //   type: 'CenexasHallDistro',
    //   args: {
    //     centerExamSessionId: stringArg()
    //   },
    //   resolve: async (_parent, { centerExamSessionId }, { prisma }) => {
    //     return await prisma.cenexasHallDistro.findMany({
    //       where: { centerExamSessionId: String(centerExamSessionId) }
    //     });
    //   }
    // });

    // t.list.field('distroOfACenexasHallDistro', {
    //   type: 'CenexasHallDistro',
    //   args: {
    //     cenexasHallId: stringArg()
    //   },
    //   resolve: async (_parent, { cenexasHallId }, { prisma }) => {
    //     return await prisma.cenexasHallDistro.findMany({
    //       where: { cenexasHallId: String(cenexasHallId) },
    //       include: {
    //         Timetable: true
    //       }
    //     });
    //   }
    // });

    // t.list.field('hallsOfACenexasSubject', {
    //   type: 'CenexasHallDistro',
    //   args: {
    //     centerExamSessionId: stringArg(),
    //     timetableId: stringArg()
    //   },
    //   resolve: async (
    //     _parent,
    //     { centerExamSessionId, timetableId },
    //     { prisma }
    //   ) => {
    //     return await prisma.cenexasHallDistro.findMany({
    //       where: {
    //         centerExamSessionId: String(centerExamSessionId),
    //         timetableId: String(timetableId)
    //       }
    //     });
    //   }
    // });

    // t.field('cenexasHallDistro', {
    //   type: 'CenexasHallDistro',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.cenexasHallDistro.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('subjectSerieses', {
    //   type: 'SubjectSeries',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.subjectSeries.findMany();
    //   }
    // });

    // t.list.field('subjectSeriesOfSeries', {
    //   type: 'SubjectSeries',
    //   args: {
    //     seriesId: stringArg()
    //   },
    //   resolve: async (_parent, { seriesId }, { prisma }) => {
    //     return await prisma.subjectSeries.findMany({
    //       where: { seriesId: String(seriesId) }
    //     });
    //   }
    // });

    // t.field('subjectSeries', {
    //   type: 'SubjectSeries',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.subjectSeries.findUnique({
    //       where: { id: String(id) }
    //     });
    //   }
    // });

    // t.list.field('payMethods', {
    //   type: 'PayMethod',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.payMethod.findMany();
    //   }
    // });

    // t.field('payMethod', {
    //   type: 'PayMethod',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.payMethod.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('payments', {
    //   type: 'Payment',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.payment.findMany();
    //   }
    // });

    // t.field('payment', {
    //   type: 'Payment',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.payment.findUnique({ where: { id: String(id) } });
    //   }
    // });

    // t.list.field('receipts', {
    //   type: 'Receipt',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.receipt.findMany();
    //   }
    // });

    // t.field('receipt', {
    //   type: 'Receipt',
    //   args: {
    //     id: stringArg()
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.receipt.findUnique({ where: { id: String(id) } });
    //   }
    // });
  }
});
export default Query;
