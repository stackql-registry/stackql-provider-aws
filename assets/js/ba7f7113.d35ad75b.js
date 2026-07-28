"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["821884"],{878759(e,t,i){i.r(t),i.d(t,{metadata:()=>r,default:()=>m,frontMatter:()=>d,contentTitle:()=>u,toc:()=>p,assets:()=>h});var r=JSON.parse('{"id":"services/codebuild/projects/index","title":"projects","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/codebuild/projects/index.md","sourceDirName":"services/codebuild/projects","slug":"/services/codebuild/projects/","permalink":"/services/codebuild/projects/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"projects","hide_title":false,"hide_table_of_contents":false,"keywords":["projects","codebuild","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"fleets","permalink":"/services/codebuild/fleets/"},"next":{"title":"report_group_trends","permalink":"/services/codebuild/report_group_trends/"}}'),o=i(474848),s=i(28453),n=i(97362),a=i(897272),c=i(413554),l=i(541647);let d={title:"projects",hide_title:!1,hide_table_of_contents:!1,keywords:["projects","codebuild","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,o.jsx)("code",{children:"projects"})," resource."]}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Name"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"projects"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Type"})}),(0,o.jsx)("td",{children:"Resource"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Id"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"aws.codebuild.projects"})})]})]})}),"\n",(0,o.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.p,{children:["The following fields are returned by ",(0,o.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,o.jsxs)(c.A,{defaultValue:"batch_get_projects",values:[{label:"batch_get_projects",value:"batch_get_projects"},{label:"list_projects",value:"list_projects"}],children:[(0,o.jsx)(l.A,{value:"batch_get_projects",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"projects"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"array"})}),(0,o.jsx)("td",{children:"Information about the requested build projects."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"projectsNotFound"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"array"})}),(0,o.jsx)("td",{children:"The names of build projects for which information could not be found."})]})]})]})}),(0,o.jsx)(l.A,{value:"list_projects",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"project"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The list of build project names, with each build project name representing a single build project."})]})})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Accessible by"}),(0,o.jsx)("th",{children:"Required Params"}),(0,o.jsx)("th",{children:"Optional Params"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#batch_get_projects",children:(0,o.jsx)(n.A,{code:"batch_get_projects"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Gets information about one or more build projects."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#list_projects",children:(0,o.jsx)(n.A,{code:"list_projects"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Gets a list of build project names, with each build project name representing a single build project."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#create_project",children:(0,o.jsx)(n.A,{code:"create_project"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"insert"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-name",children:(0,o.jsx)("code",{children:"name"})}),", ",(0,o.jsx)("a",{href:"#parameter-source",children:(0,o.jsx)("code",{children:"source"})}),", ",(0,o.jsx)("a",{href:"#parameter-artifacts",children:(0,o.jsx)("code",{children:"artifacts"})}),", ",(0,o.jsx)("a",{href:"#parameter-environment",children:(0,o.jsx)("code",{children:"environment"})}),", ",(0,o.jsx)("a",{href:"#parameter-serviceRole",children:(0,o.jsx)("code",{children:"serviceRole"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Creates a build project."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#create_webhook",children:(0,o.jsx)(n.A,{code:"create_webhook"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"insert"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-projectName",children:(0,o.jsx)("code",{children:"projectName"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#update_project_visibility",children:(0,o.jsx)(n.A,{code:"update_project_visibility"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-projectArn",children:(0,o.jsx)("code",{children:"projectArn"})}),", ",(0,o.jsx)("a",{href:"#parameter-projectVisibility",children:(0,o.jsx)("code",{children:"projectVisibility"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#update_project",children:(0,o.jsx)(n.A,{code:"update_project"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-name",children:(0,o.jsx)("code",{children:"name"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Changes the settings of a build project."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#update_webhook",children:(0,o.jsx)(n.A,{code:"update_webhook"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-projectName",children:(0,o.jsx)("code",{children:"projectName"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#delete_project",children:(0,o.jsx)(n.A,{code:"delete_project"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"delete"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Deletes a build project. When you delete a project, its builds are not deleted."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#delete_webhook",children:(0,o.jsx)(n.A,{code:"delete_webhook"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"delete"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#invalidate_project_cache",children:(0,o.jsx)(n.A,{code:"invalidate_project_cache"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"exec"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-projectName",children:(0,o.jsx)("code",{children:"projectName"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Resets the cache for a project."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,o.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,o.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{id:"parameter-region",children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.A,{code:"region"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,o.jsxs)(t.h2,{id:"select-examples",children:[(0,o.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,o.jsxs)(c.A,{defaultValue:"batch_get_projects",values:[{label:"batch_get_projects",value:"batch_get_projects"},{label:"list_projects",value:"list_projects"}],children:[(0,o.jsxs)(l.A,{value:"batch_get_projects",children:[(0,o.jsx)(t.p,{children:"Gets information about one or more build projects."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT\nprojects,\nprojectsNotFound\nFROM aws.codebuild.projects\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,o.jsxs)(l.A,{value:"list_projects",children:[(0,o.jsx)(t.p,{children:"Gets a list of build project names, with each build project name representing a single build project."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT\nproject\nFROM aws.codebuild.projects\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,o.jsxs)(t.h2,{id:"insert-examples",children:[(0,o.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,o.jsxs)(c.A,{defaultValue:"create_project",values:[{label:"create_project",value:"create_project"},{label:"create_webhook",value:"create_webhook"},{label:"Manifest",value:"manifest"}],children:[(0,o.jsxs)(l.A,{value:"create_project",children:[(0,o.jsx)(t.p,{children:"Creates a build project."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.codebuild.projects (\nname,\ndescription,\nsource,\nsecondarySources,\nsourceVersion,\nsecondarySourceVersions,\nartifacts,\nsecondaryArtifacts,\ncache,\nenvironment,\nserviceRole,\ntimeoutInMinutes,\nqueuedTimeoutInMinutes,\nencryptionKey,\ntags,\nvpcConfig,\nbadgeEnabled,\nlogsConfig,\nfileSystemLocations,\nbuildBatchConfig,\nconcurrentBuildLimit,\nautoRetryLimit,\nregion\n)\nSELECT \n'{{ name }}' /* required */,\n'{{ description }}',\n'{{ source }}' /* required */,\n'{{ secondarySources }}',\n'{{ sourceVersion }}',\n'{{ secondarySourceVersions }}',\n'{{ artifacts }}' /* required */,\n'{{ secondaryArtifacts }}',\n'{{ cache }}',\n'{{ environment }}' /* required */,\n'{{ serviceRole }}' /* required */,\n{{ timeoutInMinutes }},\n{{ queuedTimeoutInMinutes }},\n'{{ encryptionKey }}',\n'{{ tags }}',\n'{{ vpcConfig }}',\n{{ badgeEnabled }},\n'{{ logsConfig }}',\n'{{ fileSystemLocations }}',\n'{{ buildBatchConfig }}',\n{{ concurrentBuildLimit }},\n{{ autoRetryLimit }},\n'{{ region }}'\nRETURNING\nproject\n;\n"})})]}),(0,o.jsxs)(l.A,{value:"create_webhook",children:[(0,o.jsx)(t.p,{children:"For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.codebuild.projects (\nprojectName,\nbranchFilter,\nfilterGroups,\nbuildType,\nmanualCreation,\nscopeConfiguration,\npullRequestBuildPolicy,\nregion\n)\nSELECT \n'{{ projectName }}' /* required */,\n'{{ branchFilter }}',\n'{{ filterGroups }}',\n'{{ buildType }}',\n{{ manualCreation }},\n'{{ scopeConfiguration }}',\n'{{ pullRequestBuildPolicy }}',\n'{{ region }}'\nRETURNING\nwebhook\n;\n"})})]}),(0,o.jsx)(l.A,{value:"manifest",children:(0,o.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: projects
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the projects resource.
  - name: name
    value: "{{ name }}"
    description: |
      The name of the build project.
  - name: description
    value: "{{ description }}"
    description: |
      A description that makes the build project easy to identify.
  - name: source
    description: |
      Information about the build input source code for the build project.
    value:
      type_: "{{ type_ }}"
      location: "{{ location }}"
      gitCloneDepth: {{ gitCloneDepth }}
      gitSubmodulesConfig:
        fetchSubmodules: {{ fetchSubmodules }}
      buildspec: "{{ buildspec }}"
      auth:
        type_: "{{ type_ }}"
        resource: "{{ resource }}"
      reportBuildStatus: {{ reportBuildStatus }}
      buildStatusConfig:
        context: "{{ context }}"
        targetUrl: "{{ targetUrl }}"
      insecureSsl: {{ insecureSsl }}
      sourceIdentifier: "{{ sourceIdentifier }}"
  - name: secondarySources
    description: |
      An array of ProjectSource objects.
    value:
      - type_: "{{ type_ }}"
        location: "{{ location }}"
        gitCloneDepth: {{ gitCloneDepth }}
        gitSubmodulesConfig:
          fetchSubmodules: {{ fetchSubmodules }}
        buildspec: "{{ buildspec }}"
        auth:
          type_: "{{ type_ }}"
          resource: "{{ resource }}"
        reportBuildStatus: {{ reportBuildStatus }}
        buildStatusConfig:
          context: "{{ context }}"
          targetUrl: "{{ targetUrl }}"
        insecureSsl: {{ insecureSsl }}
        sourceIdentifier: "{{ sourceIdentifier }}"
  - name: sourceVersion
    value: "{{ sourceVersion }}"
    description: |
      A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: For CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For GitLab: the commit ID, branch, or Git tag to use. For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For Amazon S3: the version ID of the object that represents the build input ZIP file to use. If sourceVersion is specified at the build level, then that version takes precedence over this sourceVersion (at the project level). For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide.
  - name: secondarySourceVersions
    description: |
      An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take precedence over these secondarySourceVersions (at the project level).
    value:
      - sourceIdentifier: "{{ sourceIdentifier }}"
        sourceVersion: "{{ sourceVersion }}"
  - name: artifacts
    description: |
      Information about the build output artifacts for the build project.
    value:
      type_: "{{ type_ }}"
      location: "{{ location }}"
      path: "{{ path }}"
      namespaceType: "{{ namespaceType }}"
      name: "{{ name }}"
      packaging: "{{ packaging }}"
      overrideArtifactName: {{ overrideArtifactName }}
      encryptionDisabled: {{ encryptionDisabled }}
      artifactIdentifier: "{{ artifactIdentifier }}"
      bucketOwnerAccess: "{{ bucketOwnerAccess }}"
  - name: secondaryArtifacts
    description: |
      An array of ProjectArtifacts objects.
    value:
      - type_: "{{ type_ }}"
        location: "{{ location }}"
        path: "{{ path }}"
        namespaceType: "{{ namespaceType }}"
        name: "{{ name }}"
        packaging: "{{ packaging }}"
        overrideArtifactName: {{ overrideArtifactName }}
        encryptionDisabled: {{ encryptionDisabled }}
        artifactIdentifier: "{{ artifactIdentifier }}"
        bucketOwnerAccess: "{{ bucketOwnerAccess }}"
  - name: cache
    description: |
      Information about the cache for the build project.
    value:
      type_: "{{ type_ }}"
      location: "{{ location }}"
      modes:
        - "{{ modes }}"
      cacheNamespace: "{{ cacheNamespace }}"
  - name: environment
    description: |
      Information about the build environment of the build project.
    value:
      type_: "{{ type_ }}"
      image: "{{ image }}"
      computeType: "{{ computeType }}"
      computeConfiguration:
        vCpu: {{ vCpu }}
        memory: {{ memory }}
        disk: {{ disk }}
        machineType: "{{ machineType }}"
        instanceType: "{{ instanceType }}"
      fleet:
        fleetArn: "{{ fleetArn }}"
      environmentVariables:
        - name: "{{ name }}"
          value: "{{ value }}"
          type_: "{{ type_ }}"
      privilegedMode: {{ privilegedMode }}
      certificate: "{{ certificate }}"
      registryCredential:
        credential: "{{ credential }}"
        credentialProvider: "{{ credentialProvider }}"
      imagePullCredentialsType: "{{ imagePullCredentialsType }}"
      dockerServer:
        computeType: "{{ computeType }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
        status:
          status: "{{ status }}"
          message: "{{ message }}"
  - name: serviceRole
    value: "{{ serviceRole }}"
    description: |
      The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
  - name: timeoutInMinutes
    value: {{ timeoutInMinutes }}
    description: |
      How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.
  - name: queuedTimeoutInMinutes
    value: {{ queuedTimeoutInMinutes }}
    description: |
      The number of minutes a build is allowed to be queued before it times out.
  - name: encryptionKey
    value: "{{ encryptionKey }}"
    description: |
      The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/\`<alias-name>\`).
  - name: tags
    description: |
      A list of tag key and value pairs associated with this build project. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
  - name: vpcConfig
    description: |
      Information about the VPC configuration that CodeBuild accesses.
    value:
      vpcId: "{{ vpcId }}"
      subnets:
        - "{{ subnets }}"
      securityGroupIds:
        - "{{ securityGroupIds }}"
  - name: badgeEnabled
    value: {{ badgeEnabled }}
    description: |
      Set this to true to generate a publicly accessible URL for your project's build badge.
  - name: logsConfig
    description: |
      Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
    value:
      cloudWatchLogs:
        status: "{{ status }}"
        groupName: "{{ groupName }}"
        streamName: "{{ streamName }}"
      s3Logs:
        status: "{{ status }}"
        location: "{{ location }}"
        encryptionDisabled: {{ encryptionDisabled }}
        bucketOwnerAccess: "{{ bucketOwnerAccess }}"
  - name: fileSystemLocations
    description: |
      An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System.
    value:
      - type_: "{{ type_ }}"
        location: "{{ location }}"
        mountPoint: "{{ mountPoint }}"
        identifier: "{{ identifier }}"
        mountOptions: "{{ mountOptions }}"
  - name: buildBatchConfig
    description: |
      Contains configuration information about a batch build project.
    value:
      serviceRole: "{{ serviceRole }}"
      combineArtifacts: {{ combineArtifacts }}
      restrictions:
        maximumBuildsAllowed: {{ maximumBuildsAllowed }}
        computeTypesAllowed:
          - "{{ computeTypesAllowed }}"
        fleetsAllowed:
          - "{{ fleetsAllowed }}"
      timeoutInMins: {{ timeoutInMins }}
      batchReportMode: "{{ batchReportMode }}"
  - name: concurrentBuildLimit
    value: {{ concurrentBuildLimit }}
    description: |
      The maximum number of concurrent builds that are allowed for this project. New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.
  - name: autoRetryLimit
    value: {{ autoRetryLimit }}
    description: |
      The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times.
  - name: projectName
    value: "{{ projectName }}"
    description: |
      The name of the CodeBuild project.
  - name: branchFilter
    value: "{{ branchFilter }}"
    description: |
      A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built. It is recommended that you use filterGroups instead of branchFilter.
  - name: filterGroups
    value:
      - "{{ filterGroups }}"
    description: |
      An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At least one WebhookFilter in the array must specify EVENT as its type. For a build to be triggered, at least one filter group in the filterGroups array must pass. For a filter group to pass, each of its filters must pass.
  - name: buildType
    value: "{{ buildType }}"
    description: |
      Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide.
    valid_values: ['BUILD', 'BUILD_BATCH', 'RUNNER_BUILDKITE_BUILD']
  - name: manualCreation
    value: {{ manualCreation }}
    description: |
      If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook within GitHub. manualCreation is only available for GitHub webhooks.
  - name: scopeConfiguration
    description: |
      The scope configuration for global or organization webhooks. Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.
    value:
      name: "{{ name }}"
      domain: "{{ domain }}"
      scope: "{{ scope }}"
  - name: pullRequestBuildPolicy
    description: |
      A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
    value:
      requiresCommentApproval: "{{ requiresCommentApproval }}"
      approverRoles:
        - "{{ approverRoles }}"
`})})]}),"\n",(0,o.jsxs)(t.h2,{id:"update-examples",children:[(0,o.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,o.jsxs)(c.A,{defaultValue:"update_project_visibility",values:[{label:"update_project_visibility",value:"update_project_visibility"},{label:"update_project",value:"update_project"},{label:"update_webhook",value:"update_webhook"}],children:[(0,o.jsxs)(l.A,{value:"update_project_visibility",children:[(0,o.jsx)(t.p,{children:"Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.codebuild.projects\nSET \nprojectArn = '{{ projectArn }}',\nprojectVisibility = '{{ projectVisibility }}',\nresourceAccessRole = '{{ resourceAccessRole }}'\nWHERE \nregion = '{{ region }}' --required\nAND projectArn = '{{ projectArn }}' --required\nAND projectVisibility = '{{ projectVisibility }}' --required\nRETURNING\nprojectArn,\nprojectVisibility,\npublicProjectAlias;\n"})})]}),(0,o.jsxs)(l.A,{value:"update_project",children:[(0,o.jsx)(t.p,{children:"Changes the settings of a build project."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.codebuild.projects\nSET \nname = '{{ name }}',\ndescription = '{{ description }}',\nsource = '{{ source }}',\nsecondarySources = '{{ secondarySources }}',\nsourceVersion = '{{ sourceVersion }}',\nsecondarySourceVersions = '{{ secondarySourceVersions }}',\nartifacts = '{{ artifacts }}',\nsecondaryArtifacts = '{{ secondaryArtifacts }}',\ncache = '{{ cache }}',\nenvironment = '{{ environment }}',\nserviceRole = '{{ serviceRole }}',\ntimeoutInMinutes = {{ timeoutInMinutes }},\nqueuedTimeoutInMinutes = {{ queuedTimeoutInMinutes }},\nencryptionKey = '{{ encryptionKey }}',\ntags = '{{ tags }}',\nvpcConfig = '{{ vpcConfig }}',\nbadgeEnabled = {{ badgeEnabled }},\nlogsConfig = '{{ logsConfig }}',\nfileSystemLocations = '{{ fileSystemLocations }}',\nbuildBatchConfig = '{{ buildBatchConfig }}',\nconcurrentBuildLimit = {{ concurrentBuildLimit }},\nautoRetryLimit = {{ autoRetryLimit }}\nWHERE \nregion = '{{ region }}' --required\nAND name = '{{ name }}' --required\nRETURNING\nproject;\n"})})]}),(0,o.jsxs)(l.A,{value:"update_webhook",children:[(0,o.jsx)(t.p,{children:"Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.codebuild.projects\nSET \nprojectName = '{{ projectName }}',\nbranchFilter = '{{ branchFilter }}',\nrotateSecret = {{ rotateSecret }},\nfilterGroups = '{{ filterGroups }}',\nbuildType = '{{ buildType }}',\npullRequestBuildPolicy = '{{ pullRequestBuildPolicy }}'\nWHERE \nregion = '{{ region }}' --required\nAND projectName = '{{ projectName }}' --required\nRETURNING\nwebhook;\n"})})]})]}),"\n",(0,o.jsxs)(t.h2,{id:"delete-examples",children:[(0,o.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,o.jsxs)(c.A,{defaultValue:"delete_project",values:[{label:"delete_project",value:"delete_project"},{label:"delete_webhook",value:"delete_webhook"}],children:[(0,o.jsxs)(l.A,{value:"delete_project",children:[(0,o.jsx)(t.p,{children:"Deletes a build project. When you delete a project, its builds are not deleted."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.codebuild.projects\nWHERE region = '{{ region }}' --required\n;\n"})})]}),(0,o.jsxs)(l.A,{value:"delete_webhook",children:[(0,o.jsx)(t.p,{children:"For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.codebuild.projects\nWHERE region = '{{ region }}' --required\n;\n"})})]})]}),"\n",(0,o.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,o.jsx)(c.A,{defaultValue:"invalidate_project_cache",values:[{label:"invalidate_project_cache",value:"invalidate_project_cache"}],children:(0,o.jsxs)(l.A,{value:"invalidate_project_cache",children:[(0,o.jsx)(t.p,{children:"Resets the cache for a project."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"EXEC aws.codebuild.projects.invalidate_project_cache \n@region='{{ region }}' --required \n@@json=\n'{\n\"projectName\": \"{{ projectName }}\"\n}'\n;\n"})})]})})]})}function m(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}}}]);