"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["828947"],{572320(e,r,s){s.r(r),s.d(r,{metadata:()=>t,default:()=>u,frontMatter:()=>c,contentTitle:()=>h,toc:()=>f,assets:()=>x});var t=JSON.parse('{"id":"services/transfer/workflows/index","title":"workflows","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/transfer/workflows/index.md","sourceDirName":"services/transfer/workflows","slug":"/services/transfer/workflows/","permalink":"/services/transfer/workflows/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"workflows","hide_title":false,"hide_table_of_contents":false,"keywords":["workflows","transfer","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"web_apps","permalink":"/services/transfer/web_apps/"},"next":{"title":"translate","permalink":"/services/translate/"}}'),i=s(474848),o=s(28453),n=s(97362),l=s(897272),a=s(413554),d=s(541647);let c={title:"workflows",hide_title:!1,hide_table_of_contents:!1,keywords:["workflows","transfer","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},f=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function w(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"workflows"})," resource."]}),"\n",(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"workflows"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"aws.transfer.workflows"})})]})]})}),"\n",(0,i.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.p,{children:["The following fields are returned by ",(0,i.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(a.A,{defaultValue:"describe_workflow",values:[{label:"describe_workflow",value:"describe_workflow"},{label:"list_workflows",value:"list_workflows"}],children:[(0,i.jsx)(d.A,{value:"describe_workflow",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the unique Amazon Resource Name (ARN) for the workflow. (pattern: <code>arn:\\S+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the text description for the workflow. (pattern: <code>[\\w- ]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"OnExceptionSteps"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Specifies the steps (actions) to take if errors are encountered during execution of the workflow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Steps"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Specifies the details for the steps that are in the specified workflow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Tags"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"WorkflowId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A unique identifier for the workflow. (pattern: <code>w-([a-z0-9]{17})</code>)"})]})]})]})}),(0,i.jsx)(d.A,{value:"list_workflows",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the unique Amazon Resource Name (ARN) for the workflow. (pattern: <code>arn:\\S+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"Description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the text description for the workflow. (pattern: <code>[\\w- ]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"WorkflowId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A unique identifier for the workflow. (pattern: <code>w-([a-z0-9]{17})</code>)"})]})]})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#describe_workflow",children:(0,i.jsx)(n.A,{code:"describe_workflow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Describes the specified workflow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_workflows",children:(0,i.jsx)(n.A,{code:"list_workflows"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Lists all workflows associated with your Amazon Web Services account for your current region."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_workflow",children:(0,i.jsx)(n.A,{code:"create_workflow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-Steps",children:(0,i.jsx)("code",{children:"Steps"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the workflow-details field in CreateServer and UpdateServer operations."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_workflow",children:(0,i.jsx)(n.A,{code:"delete_workflow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deletes the specified workflow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#send_workflow_step_state",children:(0,i.jsx)(n.A,{code:"send_workflow_step_state"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"exec"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-WorkflowId",children:(0,i.jsx)("code",{children:"WorkflowId"})}),", ",(0,i.jsx)("a",{href:"#parameter-ExecutionId",children:(0,i.jsx)("code",{children:"ExecutionId"})}),", ",(0,i.jsx)("a",{href:"#parameter-Token",children:(0,i.jsx)("code",{children:"Token"})}),", ",(0,i.jsx)("a",{href:"#parameter-Status",children:(0,i.jsx)("code",{children:"Status"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Sends a callback for asynchronous custom steps. The ExecutionId, WorkflowId, and Token are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,i.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(r.h2,{id:"select-examples",children:[(0,i.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(a.A,{defaultValue:"describe_workflow",values:[{label:"describe_workflow",value:"describe_workflow"},{label:"list_workflows",value:"list_workflows"}],children:[(0,i.jsxs)(d.A,{value:"describe_workflow",children:[(0,i.jsx)(r.p,{children:"Describes the specified workflow."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"SELECT\nArn,\nDescription,\nOnExceptionSteps,\nSteps,\nTags,\nWorkflowId\nFROM aws.transfer.workflows\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(d.A,{value:"list_workflows",children:[(0,i.jsx)(r.p,{children:"Lists all workflows associated with your Amazon Web Services account for your current region."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"SELECT\nArn,\nDescription,\nWorkflowId\nFROM aws.transfer.workflows\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(r.h2,{id:"insert-examples",children:[(0,i.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(a.A,{defaultValue:"create_workflow",values:[{label:"create_workflow",value:"create_workflow"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(d.A,{value:"create_workflow",children:[(0,i.jsx)(r.p,{children:"Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the workflow-details field in CreateServer and UpdateServer operations."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.transfer.workflows (\nDescription,\nSteps,\nOnExceptionSteps,\nTags,\nregion\n)\nSELECT \n'{{ Description }}',\n'{{ Steps }}' /* required */,\n'{{ OnExceptionSteps }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nWorkflowId\n;\n"})})]}),(0,i.jsx)(d.A,{value:"manifest",children:(0,i.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: workflows
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the workflows resource.
  - name: Description
    value: "{{ Description }}"
    description: |
      A textual description for the workflow.
  - name: Steps
    description: |
      Specifies the details for the steps that are in the specified workflow. The TYPE specifies which of the following actions is being taken for this step. COPY - Copy the file to another location. CUSTOM - Perform a custom step with an Lambda function target. DECRYPT - Decrypt a file that was encrypted before it was uploaded. DELETE - Delete the file. TAG - Add a tag to the file. Currently, copying and tagging are supported only on S3. For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID and path.
    value:
      - Type: "{{ Type }}"
        CopyStepDetails:
          Name: "{{ Name }}"
          DestinationFileLocation:
            S3FileLocation:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
            EfsFileLocation:
              FileSystemId: "{{ FileSystemId }}"
              Path: "{{ Path }}"
          OverwriteExisting: "{{ OverwriteExisting }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        CustomStepDetails:
          Name: "{{ Name }}"
          Target: "{{ Target }}"
          TimeoutSeconds: {{ TimeoutSeconds }}
          SourceFileLocation: "{{ SourceFileLocation }}"
        DeleteStepDetails:
          Name: "{{ Name }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        TagStepDetails:
          Name: "{{ Name }}"
          Tags:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        DecryptStepDetails:
          Name: "{{ Name }}"
          Type: "{{ Type }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
          OverwriteExisting: "{{ OverwriteExisting }}"
          DestinationFileLocation:
            S3FileLocation:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
            EfsFileLocation:
              FileSystemId: "{{ FileSystemId }}"
              Path: "{{ Path }}"
  - name: OnExceptionSteps
    description: |
      Specifies the steps (actions) to take if errors are encountered during execution of the workflow. For custom steps, the Lambda function needs to send FAILURE to the call back API to kick off the exception steps. Additionally, if the Lambda does not send SUCCESS before it times out, the exception steps are executed.
    value:
      - Type: "{{ Type }}"
        CopyStepDetails:
          Name: "{{ Name }}"
          DestinationFileLocation:
            S3FileLocation:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
            EfsFileLocation:
              FileSystemId: "{{ FileSystemId }}"
              Path: "{{ Path }}"
          OverwriteExisting: "{{ OverwriteExisting }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        CustomStepDetails:
          Name: "{{ Name }}"
          Target: "{{ Target }}"
          TimeoutSeconds: {{ TimeoutSeconds }}
          SourceFileLocation: "{{ SourceFileLocation }}"
        DeleteStepDetails:
          Name: "{{ Name }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        TagStepDetails:
          Name: "{{ Name }}"
          Tags:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
        DecryptStepDetails:
          Name: "{{ Name }}"
          Type: "{{ Type }}"
          SourceFileLocation: "{{ SourceFileLocation }}"
          OverwriteExisting: "{{ OverwriteExisting }}"
          DestinationFileLocation:
            S3FileLocation:
              Bucket: "{{ Bucket }}"
              Key: "{{ Key }}"
            EfsFileLocation:
              FileSystemId: "{{ FileSystemId }}"
              Path: "{{ Path }}"
  - name: Tags
    description: |
      Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,i.jsxs)(r.h2,{id:"delete-examples",children:[(0,i.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(a.A,{defaultValue:"delete_workflow",values:[{label:"delete_workflow",value:"delete_workflow"}],children:(0,i.jsxs)(d.A,{value:"delete_workflow",children:[(0,i.jsx)(r.p,{children:"Deletes the specified workflow."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.transfer.workflows\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,i.jsx)(r.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,i.jsx)(a.A,{defaultValue:"send_workflow_step_state",values:[{label:"send_workflow_step_state",value:"send_workflow_step_state"}],children:(0,i.jsxs)(d.A,{value:"send_workflow_step_state",children:[(0,i.jsx)(r.p,{children:"Sends a callback for asynchronous custom steps. The ExecutionId, WorkflowId, and Token are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status."}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:'EXEC aws.transfer.workflows.send_workflow_step_state \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"WorkflowId": "{{ WorkflowId }}", \n"ExecutionId": "{{ ExecutionId }}", \n"Token": "{{ Token }}", \n"Status": "{{ Status }}"\n}\'\n;\n'})})]})})]})}function u(e={}){let{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);