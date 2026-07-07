--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - ssm
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_document"
    values={[
        { label: 'describe_document', value: 'describe_document' }
    ]}
>
<TabItem value="describe_document">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ApprovedVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the document currently approved for use in the organization. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AttachmentsInformation" /></td>
    <td><code>array</code></td>
    <td>Details about the document attachments, including names, locations, sizes, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="Author" /></td>
    <td><code>string</code></td>
    <td>The user in your organization who created the document.</td>
</tr>
<tr>
    <td><CopyableCode code="Category" /></td>
    <td><code>array</code></td>
    <td>The classification of a document to help you identify and categorize its use.</td>
</tr>
<tr>
    <td><CopyableCode code="CategoryEnum" /></td>
    <td><code>array</code></td>
    <td>The value that identifies a document's category.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the document was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultVersion" /></td>
    <td><code>string</code></td>
    <td>The default version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument. (pattern: &lt;code&gt;^&#91;\w\.\-\:\/ &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentFormat" /></td>
    <td><code>string</code></td>
    <td>The document format, either JSON or YAML. (YAML, JSON, TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentType" /></td>
    <td><code>string</code></td>
    <td>The type of document. (Command, Policy, Automation, Session, Package, ApplicationConfiguration, ApplicationConfigurationSchema, DeploymentStrategy, ChangeCalendar, Automation.ChangeTemplate, ProblemAnalysis, ProblemAnalysisTemplate, CloudFormation, ConformancePackTemplate, QuickSetup, ManualApprovalPolicy, AutoApprovalPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentVersion" /></td>
    <td><code>string</code></td>
    <td>The document version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Hash" /></td>
    <td><code>string</code></td>
    <td>The Sha256 or Sha1 hash created by the system when the document was created. Sha1 hashes have been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="HashType" /></td>
    <td><code>string</code></td>
    <td>The hash type of the document. Valid values include Sha256 or Sha1. Sha1 hashes have been deprecated. (Sha256, Sha1)</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>string</code></td>
    <td>The latest version of the document. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the SSM document. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.:/&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services user that created the document.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A description of the parameters for a document.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingReviewVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the document that is currently under review. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PlatformTypes" /></td>
    <td><code>array</code></td>
    <td>The list of operating system (OS) platforms compatible with this SSM document.</td>
</tr>
<tr>
    <td><CopyableCode code="Requires" /></td>
    <td><code>array</code></td>
    <td>A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.</td>
</tr>
<tr>
    <td><CopyableCode code="ReviewInformation" /></td>
    <td><code>array</code></td>
    <td>Details about the review of a document.</td>
</tr>
<tr>
    <td><CopyableCode code="ReviewStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the review. (APPROVED, NOT_REVIEWED, PENDING, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaVersion" /></td>
    <td><code>string</code></td>
    <td>The schema version. (pattern: &lt;code&gt;(&#91;0-9&#93;+)\.(&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Sha1" /></td>
    <td><code>string</code></td>
    <td>The SHA1 hash of the document, which you can use for verification.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the SSM document. (Creating, Active, Updating, Deleting, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusInformation" /></td>
    <td><code>string</code></td>
    <td>A message returned by Amazon Web Services Systems Manager that explains the Status value. For example, a Failed status might be explained by the StatusInformation message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags, or metadata, that have been applied to the document.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetType" /></td>
    <td><code>string</code></td>
    <td>The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see Amazon Web Services resource and property types reference in the CloudFormation User Guide. (pattern: &lt;code&gt;^\/&#91;\w\.\-\:\/&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionName" /></td>
    <td><code>string</code></td>
    <td>The version of the artifact associated with the document. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_document"><CopyableCode code="describe_document" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified Amazon Web Services Systems Manager document (SSM document).</td>
</tr>
<tr>
    <td><a href="#create_document"><CopyableCode code="create_document" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see Amazon Web Services Systems Manager Documents in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#update_document_default_version"><CopyableCode code="update_document_default_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentVersion"><code>DocumentVersion</code></a></td>
    <td></td>
    <td>Set the default version of a document. If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter.</td>
</tr>
<tr>
    <td><a href="#update_document_metadata"><CopyableCode code="update_document_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentReviews"><code>DocumentReviews</code></a></td>
    <td></td>
    <td>Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Updates information related to approval reviews for a specific version of a change template in Change Manager.</td>
</tr>
<tr>
    <td><a href="#update_document"><CopyableCode code="update_document" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates one or more values for an SSM document.</td>
</tr>
<tr>
    <td><a href="#delete_document"><CopyableCode code="delete_document" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all managed nodes that are associated with the document.</td>
</tr>
<tr>
    <td><a href="#get_document"><CopyableCode code="get_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).</td>
</tr>
<tr>
    <td><a href="#list_documents"><CopyableCode code="list_documents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.</td>
</tr>
<tr>
    <td><a href="#start_change_request_execution"><CopyableCode code="start_change_request_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentName"><code>DocumentName</code></a>, <a href="#parameter-Runbooks"><code>Runbooks</code></a></td>
    <td></td>
    <td>Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.</td>
</tr>
<tr>
    <td><a href="#start_execution_preview"><CopyableCode code="start_execution_preview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentName"><code>DocumentName</code></a></td>
    <td></td>
    <td>Initiates the process of creating a preview showing the effects that running a specified Automation runbook would have on the targeted resources.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_document"
    values={[
        { label: 'describe_document', value: 'describe_document' }
    ]}
>
<TabItem value="describe_document">

Describes the specified Amazon Web Services Systems Manager document (SSM document).

```sql
SELECT
ApprovedVersion,
AttachmentsInformation,
Author,
Category,
CategoryEnum,
CreatedDate,
DefaultVersion,
Description,
DisplayName,
DocumentFormat,
DocumentType,
DocumentVersion,
Hash,
HashType,
LatestVersion,
Name,
Owner,
Parameters,
PendingReviewVersion,
PlatformTypes,
Requires,
ReviewInformation,
ReviewStatus,
SchemaVersion,
Sha1,
Status,
StatusInformation,
Tags,
TargetType,
VersionName
FROM aws.ssm.documents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_document"
    values={[
        { label: 'create_document', value: 'create_document' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_document">

Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see Amazon Web Services Systems Manager Documents in the Amazon Web Services Systems Manager User Guide.

```sql
INSERT INTO aws.ssm.documents (
Content,
Requires,
Attachments,
Name,
DisplayName,
VersionName,
DocumentType,
DocumentFormat,
TargetType,
Tags,
region
)
SELECT 
'{{ Content }}',
'{{ Requires }}',
'{{ Attachments }}',
'{{ Name }}',
'{{ DisplayName }}',
'{{ VersionName }}',
'{{ DocumentType }}',
'{{ DocumentFormat }}',
'{{ TargetType }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
DocumentDescription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: documents
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the documents resource.
    - name: Content
      value: "{{ Content }}"
      description: |
        The content for the new SSM document in JSON or YAML format. The content of the document must not exceed 64KB. This quota also includes the content specified for input parameters at runtime. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command. For examples, see the following topics in the Amazon Web Services Systems Manager User Guide. Create an SSM document (console) Create an SSM document (command line) Create an SSM document (API)
    - name: Requires
      description: |
        A list of SSM documents required by a document. This parameter is used exclusively by AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document for validation purposes. For more information, see What is AppConfig? in the AppConfig User Guide.
      value:
        - Name: "{{ Name }}"
          Version: "{{ Version }}"
          RequireType: "{{ RequireType }}"
          VersionName: "{{ VersionName }}"
    - name: Attachments
      description: |
        A list of key-value pairs that describe attachments to a version of a document.
      value:
        - Key: "{{ Key }}"
          Values: "{{ Values }}"
          Name: "{{ Name }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the SSM document. You can't use the following strings as document name prefixes. These are reserved by Amazon Web Services for use as document name prefixes: aws amazon amzn AWSEC2 AWSConfigRemediation AWSSupport
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        An optional field where you can specify a friendly name for the SSM document. This value can differ for each version of the document. You can update this value at a later time using the UpdateDocument operation.
    - name: VersionName
      value: "{{ VersionName }}"
      description: |
        An optional field specifying the version of the artifact you are creating with the document. For example, Release12.1. This value is unique across all versions of a document, and can't be changed.
    - name: DocumentType
      value: "{{ DocumentType }}"
      description: |
        The type of document to create. The DeploymentStrategy document type is an internal-use-only document type reserved for AppConfig.
      valid_values: ['Command', 'Policy', 'Automation', 'Session', 'Package', 'ApplicationConfiguration', 'ApplicationConfigurationSchema', 'DeploymentStrategy', 'ChangeCalendar', 'Automation.ChangeTemplate', 'ProblemAnalysis', 'ProblemAnalysisTemplate', 'CloudFormation', 'ConformancePackTemplate', 'QuickSetup', 'ManualApprovalPolicy', 'AutoApprovalPolicy']
    - name: DocumentFormat
      value: "{{ DocumentFormat }}"
      description: |
        Specify the document format for the request. The document format can be JSON, YAML, or TEXT. JSON is the default format.
      valid_values: ['YAML', 'JSON', 'TEXT']
    - name: TargetType
      value: "{{ TargetType }}"
      description: |
        Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see Amazon Web Services resource and property types reference in the CloudFormation User Guide.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an SSM document to identify the types of targets or the environment where it will run. In this case, you could specify the following key-value pairs: Key=OS,Value=Windows Key=Environment,Value=Production To add tags to an existing SSM document, use the AddTagsToResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_document_default_version"
    values={[
        { label: 'update_document_default_version', value: 'update_document_default_version' },
        { label: 'update_document_metadata', value: 'update_document_metadata' },
        { label: 'update_document', value: 'update_document' }
    ]}
>
<TabItem value="update_document_default_version">

Set the default version of a document. If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter.

```sql
UPDATE aws.ssm.documents
SET 
Name = '{{ Name }}',
DocumentVersion = '{{ DocumentVersion }}'
WHERE 
region = '{{ region }}' --required
AND DocumentVersion = '{{ DocumentVersion }}' --required
RETURNING
Description;
```
</TabItem>
<TabItem value="update_document_metadata">

Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Updates information related to approval reviews for a specific version of a change template in Change Manager.

```sql
UPDATE aws.ssm.documents
SET 
Name = '{{ Name }}',
DocumentVersion = '{{ DocumentVersion }}',
DocumentReviews = '{{ DocumentReviews }}'
WHERE 
region = '{{ region }}' --required
AND DocumentReviews = '{{ DocumentReviews }}' --required;
```
</TabItem>
<TabItem value="update_document">

Updates one or more values for an SSM document.

```sql
UPDATE aws.ssm.documents
SET 
Content = '{{ Content }}',
Attachments = '{{ Attachments }}',
Name = '{{ Name }}',
DisplayName = '{{ DisplayName }}',
VersionName = '{{ VersionName }}',
DocumentVersion = '{{ DocumentVersion }}',
DocumentFormat = '{{ DocumentFormat }}',
TargetType = '{{ TargetType }}'
WHERE 
region = '{{ region }}' --required
RETURNING
DocumentDescription;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_document"
    values={[
        { label: 'delete_document', value: 'delete_document' }
    ]}
>
<TabItem value="delete_document">

Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all managed nodes that are associated with the document.

```sql
DELETE FROM aws.ssm.documents
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_document"
    values={[
        { label: 'get_document', value: 'get_document' },
        { label: 'list_documents', value: 'list_documents' },
        { label: 'start_change_request_execution', value: 'start_change_request_execution' },
        { label: 'start_execution_preview', value: 'start_execution_preview' }
    ]}
>
<TabItem value="get_document">

Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).

```sql
EXEC aws.ssm.documents.get_document 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"VersionName": "{{ VersionName }}", 
"DocumentVersion": "{{ DocumentVersion }}", 
"DocumentFormat": "{{ DocumentFormat }}"
}'
;
```
</TabItem>
<TabItem value="list_documents">

Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.

```sql
EXEC aws.ssm.documents.list_documents 
@region='{{ region }}' --required 
@@json=
'{
"DocumentFilterList": "{{ DocumentFilterList }}", 
"Filters": "{{ Filters }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="start_change_request_execution">

Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.

```sql
EXEC aws.ssm.documents.start_change_request_execution 
@region='{{ region }}' --required 
@@json=
'{
"ScheduledTime": "{{ ScheduledTime }}", 
"DocumentName": "{{ DocumentName }}", 
"DocumentVersion": "{{ DocumentVersion }}", 
"Parameters": "{{ Parameters }}", 
"ChangeRequestName": "{{ ChangeRequestName }}", 
"ClientToken": "{{ ClientToken }}", 
"AutoApprove": {{ AutoApprove }}, 
"Runbooks": "{{ Runbooks }}", 
"Tags": "{{ Tags }}", 
"ScheduledEndTime": "{{ ScheduledEndTime }}", 
"ChangeDetails": "{{ ChangeDetails }}"
}'
;
```
</TabItem>
<TabItem value="start_execution_preview">

Initiates the process of creating a preview showing the effects that running a specified Automation runbook would have on the targeted resources.

```sql
EXEC aws.ssm.documents.start_execution_preview 
@region='{{ region }}' --required 
@@json=
'{
"DocumentName": "{{ DocumentName }}", 
"DocumentVersion": "{{ DocumentVersion }}", 
"ExecutionInputs": "{{ ExecutionInputs }}"
}'
;
```
</TabItem>
</Tabs>
