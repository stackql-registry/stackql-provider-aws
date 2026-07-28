"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["180372"],{593319(e,t,a){a.r(t),a.d(t,{metadata:()=>n,default:()=>x,frontMatter:()=>l,contentTitle:()=>j,toc:()=>p,assets:()=>u});var n=JSON.parse('{"id":"services/bedrock_data_automation/data_automation_projects/index","title":"data_automation_projects","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/bedrock_data_automation/data_automation_projects/index.md","sourceDirName":"services/bedrock_data_automation/data_automation_projects","slug":"/services/bedrock_data_automation/data_automation_projects/","permalink":"/services/bedrock_data_automation/data_automation_projects/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_automation_projects","hide_title":false,"hide_table_of_contents":false,"keywords":["data_automation_projects","bedrock_data_automation","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"data_automation_library_ingestion_jobs","permalink":"/services/bedrock_data_automation/data_automation_library_ingestion_jobs/"},"next":{"title":"tags","permalink":"/services/bedrock_data_automation/tags/"}}'),r=a(474848),i=a(28453),o=a(97362),d=a(897272),s=a(413554),c=a(541647);let l={title:"data_automation_projects",hide_title:!1,hide_table_of_contents:!1,keywords:["data_automation_projects","bedrock_data_automation","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},j,u={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"data_automation_projects"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"data_automation_projects"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"aws.bedrock_data_automation.data_automation_projects"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"get_data_automation_project",values:[{label:"get_data_automation_project",value:"get_data_automation_project"},{label:"list_data_automation_projects",value:"list_data_automation_projects"}],children:[(0,r.jsx)(c.A,{value:"get_data_automation_project",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"creationTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"Time Stamp"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"customOutputConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Custom output configuration"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"dataAutomationLibraryConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"DataAutomation Library configuration"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"kmsEncryptionContext"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"kmsKeyId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"KMS Key Identifier (pattern: <code>[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]+</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"lastModifiedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"Time Stamp"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"overrideConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Override configuration"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["ARN of a DataAutomationProject (pattern: <code>arn",":aws","(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12})",":data-automation-project","/[a-zA-Z0-9-]{12,36}</code>)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectDescription"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Description of the DataAutomationProject"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Name of the DataAutomationProject (pattern: <code>[a-zA-Z0-9-_]+</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectStage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Stage of the Project (DEVELOPMENT, LIVE)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Type of the DataAutomationProject (ASYNC, SYNC)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"standardOutputConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Standard output configuration"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Status of Data Automation Project (COMPLETED, IN_PROGRESS, FAILED)"})]})]})]})}),(0,r.jsx)(c.A,{value:"list_data_automation_projects",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"creationTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"Time Stamp"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["ARN of a DataAutomationProject (pattern: <code>arn",":aws","(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12})",":data-automation-project","/[a-zA-Z0-9-]{12,36}</code>)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Name of the DataAutomationProject (pattern: <code>[a-zA-Z0-9-_]+</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectStage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Stage of the Project (DEVELOPMENT, LIVE)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"projectType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Type of the DataAutomationProject (ASYNC, SYNC)"})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#get_data_automation_project",children:(0,r.jsx)(o.A,{code:"get_data_automation_project"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-project_arn",children:(0,r.jsx)("code",{children:"project_arn"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Gets an existing Amazon Bedrock Data Automation Project"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_data_automation_projects",children:(0,r.jsx)(o.A,{code:"list_data_automation_projects"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Lists all existing Amazon Bedrock Data Automation Projects"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_data_automation_project",children:(0,r.jsx)(o.A,{code:"create_data_automation_project"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-projectName",children:(0,r.jsx)("code",{children:"projectName"})}),", ",(0,r.jsx)("a",{href:"#parameter-standardOutputConfiguration",children:(0,r.jsx)("code",{children:"standardOutputConfiguration"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates an Amazon Bedrock Data Automation Project"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_data_automation_project",children:(0,r.jsx)(o.A,{code:"update_data_automation_project"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-project_arn",children:(0,r.jsx)("code",{children:"project_arn"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-standardOutputConfiguration",children:(0,r.jsx)("code",{children:"standardOutputConfiguration"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates an existing Amazon Bedrock Data Automation Project"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_data_automation_project",children:(0,r.jsx)(o.A,{code:"delete_data_automation_project"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-project_arn",children:(0,r.jsx)("code",{children:"project_arn"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes an existing Amazon Bedrock Data Automation Project"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-project_arn",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"project_arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"ARN generated at the server side when a DataAutomationProject is created"})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"get_data_automation_project",values:[{label:"get_data_automation_project",value:"get_data_automation_project"},{label:"list_data_automation_projects",value:"list_data_automation_projects"}],children:[(0,r.jsxs)(c.A,{value:"get_data_automation_project",children:[(0,r.jsx)(t.p,{children:"Gets an existing Amazon Bedrock Data Automation Project"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\ncreationTime,\ncustomOutputConfiguration,\ndataAutomationLibraryConfiguration,\nkmsEncryptionContext,\nkmsKeyId,\nlastModifiedTime,\noverrideConfiguration,\nprojectArn,\nprojectDescription,\nprojectName,\nprojectStage,\nprojectType,\nstandardOutputConfiguration,\nstatus\nFROM aws.bedrock_data_automation.data_automation_projects\nWHERE project_arn = '{{ project_arn }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(c.A,{value:"list_data_automation_projects",children:[(0,r.jsx)(t.p,{children:"Lists all existing Amazon Bedrock Data Automation Projects"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\ncreationTime,\nprojectArn,\nprojectName,\nprojectStage,\nprojectType\nFROM aws.bedrock_data_automation.data_automation_projects\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"create_data_automation_project",values:[{label:"create_data_automation_project",value:"create_data_automation_project"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"create_data_automation_project",children:[(0,r.jsx)(t.p,{children:"Creates an Amazon Bedrock Data Automation Project"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.bedrock_data_automation.data_automation_projects (\nprojectName,\nprojectDescription,\nprojectStage,\nprojectType,\nstandardOutputConfiguration,\ncustomOutputConfiguration,\noverrideConfiguration,\ndataAutomationLibraryConfiguration,\nclientToken,\nencryptionConfiguration,\ntags,\nregion\n)\nSELECT \n'{{ projectName }}' /* required */,\n'{{ projectDescription }}',\n'{{ projectStage }}',\n'{{ projectType }}',\n'{{ standardOutputConfiguration }}' /* required */,\n'{{ customOutputConfiguration }}',\n'{{ overrideConfiguration }}',\n'{{ dataAutomationLibraryConfiguration }}',\n'{{ clientToken }}',\n'{{ encryptionConfiguration }}',\n'{{ tags }}',\n'{{ region }}'\nRETURNING\nprojectArn,\nprojectStage,\nstatus\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_automation_projects
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_automation_projects resource.
  - name: projectName
    value: "{{ projectName }}"
    description: |
      Name of the DataAutomationProject
  - name: projectDescription
    value: "{{ projectDescription }}"
    description: |
      Description of the DataAutomationProject
  - name: projectStage
    value: "{{ projectStage }}"
    description: |
      Stage of the Project
    valid_values: ['DEVELOPMENT', 'LIVE']
  - name: projectType
    value: "{{ projectType }}"
    description: |
      Type of the DataAutomationProject
    valid_values: ['ASYNC', 'SYNC']
  - name: standardOutputConfiguration
    description: |
      Standard output configuration
    value:
      document:
        extraction:
          granularity:
            types:
              - "{{ types }}"
          boundingBox:
            state: "{{ state }}"
        generativeField:
          state: "{{ state }}"
        outputFormat:
          textFormat:
            types:
              - "{{ types }}"
          additionalFileFormat:
            state: "{{ state }}"
      image:
        extraction:
          category:
            state: "{{ state }}"
            types:
              - "{{ types }}"
          boundingBox:
            state: "{{ state }}"
        generativeField:
          state: "{{ state }}"
          types:
            - "{{ types }}"
      video:
        extraction:
          category:
            state: "{{ state }}"
            types:
              - "{{ types }}"
          boundingBox:
            state: "{{ state }}"
        generativeField:
          state: "{{ state }}"
          types:
            - "{{ types }}"
      audio:
        extraction:
          category:
            state: "{{ state }}"
            types:
              - "{{ types }}"
            typeConfiguration:
              transcript: "{{ transcript }}"
        generativeField:
          state: "{{ state }}"
          types:
            - "{{ types }}"
  - name: customOutputConfiguration
    description: |
      Custom output configuration
    value:
      blueprints:
        - blueprintArn: "{{ blueprintArn }}"
          blueprintVersion: "{{ blueprintVersion }}"
          blueprintStage: "{{ blueprintStage }}"
  - name: overrideConfiguration
    description: |
      Override configuration
    value:
      document:
        splitter:
          state: "{{ state }}"
        modalityProcessing:
          state: "{{ state }}"
        sensitiveDataConfiguration:
          detectionMode: "{{ detectionMode }}"
          detectionScope:
            - "{{ detectionScope }}"
          piiEntitiesConfiguration:
            piiEntityTypes:
              - "{{ piiEntityTypes }}"
            redactionMaskMode: "{{ redactionMaskMode }}"
      image:
        modalityProcessing:
          state: "{{ state }}"
        sensitiveDataConfiguration:
          detectionMode: "{{ detectionMode }}"
          detectionScope:
            - "{{ detectionScope }}"
          piiEntitiesConfiguration:
            piiEntityTypes:
              - "{{ piiEntityTypes }}"
            redactionMaskMode: "{{ redactionMaskMode }}"
      video:
        modalityProcessing:
          state: "{{ state }}"
        sensitiveDataConfiguration:
          detectionMode: "{{ detectionMode }}"
          detectionScope:
            - "{{ detectionScope }}"
          piiEntitiesConfiguration:
            piiEntityTypes:
              - "{{ piiEntityTypes }}"
            redactionMaskMode: "{{ redactionMaskMode }}"
      audio:
        modalityProcessing:
          state: "{{ state }}"
        languageConfiguration:
          inputLanguages:
            - "{{ inputLanguages }}"
          generativeOutputLanguage: "{{ generativeOutputLanguage }}"
          identifyMultipleLanguages: {{ identifyMultipleLanguages }}
        sensitiveDataConfiguration:
          detectionMode: "{{ detectionMode }}"
          detectionScope:
            - "{{ detectionScope }}"
          piiEntitiesConfiguration:
            piiEntityTypes:
              - "{{ piiEntityTypes }}"
            redactionMaskMode: "{{ redactionMaskMode }}"
      modalityRouting:
        jpeg: "{{ jpeg }}"
        png: "{{ png }}"
        mp4: "{{ mp4 }}"
        mov: "{{ mov }}"
  - name: dataAutomationLibraryConfiguration
    description: |
      DataAutomation Library configuration
    value:
      libraries:
        - libraryArn: "{{ libraryArn }}"
  - name: clientToken
    value: "{{ clientToken }}"
    description: |
      Client specified token used for idempotency checks
  - name: encryptionConfiguration
    description: |
      KMS Encryption Configuration
    value:
      kmsKeyId: "{{ kmsKeyId }}"
      kmsEncryptionContext: "{{ kmsEncryptionContext }}"
  - name: tags
    description: |
      List of tags
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"update_data_automation_project",values:[{label:"update_data_automation_project",value:"update_data_automation_project"}],children:(0,r.jsxs)(c.A,{value:"update_data_automation_project",children:[(0,r.jsx)(t.p,{children:"Updates an existing Amazon Bedrock Data Automation Project"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.bedrock_data_automation.data_automation_projects\nSET \nprojectStage = '{{ projectStage }}',\nprojectDescription = '{{ projectDescription }}',\nstandardOutputConfiguration = '{{ standardOutputConfiguration }}',\ncustomOutputConfiguration = '{{ customOutputConfiguration }}',\noverrideConfiguration = '{{ overrideConfiguration }}',\ndataAutomationLibraryConfiguration = '{{ dataAutomationLibraryConfiguration }}',\nencryptionConfiguration = '{{ encryptionConfiguration }}'\nWHERE \nproject_arn = '{{ project_arn }}' --required\nAND region = '{{ region }}' --required\nAND standardOutputConfiguration = '{{ standardOutputConfiguration }}' --required\nRETURNING\nprojectArn,\nprojectStage,\nstatus;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"delete_data_automation_project",values:[{label:"delete_data_automation_project",value:"delete_data_automation_project"}],children:(0,r.jsxs)(c.A,{value:"delete_data_automation_project",children:[(0,r.jsx)(t.p,{children:"Deletes an existing Amazon Bedrock Data Automation Project"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.bedrock_data_automation.data_automation_projects\nWHERE project_arn = '{{ project_arn }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);