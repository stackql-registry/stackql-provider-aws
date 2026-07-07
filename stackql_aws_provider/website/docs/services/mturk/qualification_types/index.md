--- 
title: qualification_types
hide_title: false
hide_table_of_contents: false
keywords:
  - qualification_types
  - mturk
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

Creates, updates, deletes, gets or lists a <code>qualification_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qualification_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.qualification_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_qualification_type"
    values={[
        { label: 'get_qualification_type', value: 'get_qualification_type' },
        { label: 'list_qualification_types', value: 'list_qualification_types' }
    ]}
>
<TabItem value="get_qualification_type">

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
    <td><CopyableCode code="AnswerKey" /></td>
    <td><code>string</code></td>
    <td>The answers to the Qualification test specified in the Test parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoGranted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoGrantedValue" /></td>
    <td><code>integer</code></td>
    <td>The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Qualification type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A long description for the Qualification type.</td>
</tr>
<tr>
    <td><CopyableCode code="IsRequestable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False.</td>
</tr>
<tr>
    <td><CopyableCode code="Keywords" /></td>
    <td><code>string</code></td>
    <td>One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search.</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationTypeId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationTypeStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="RetryDelayInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once.</td>
</tr>
<tr>
    <td><CopyableCode code="Test" /></td>
    <td><code>string</code></td>
    <td>The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true.</td>
</tr>
<tr>
    <td><CopyableCode code="TestDurationInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_qualification_types">

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
    <td><CopyableCode code="AnswerKey" /></td>
    <td><code>string</code></td>
    <td>The answers to the Qualification test specified in the Test parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoGranted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoGrantedValue" /></td>
    <td><code>integer</code></td>
    <td>The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Qualification type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A long description for the Qualification type.</td>
</tr>
<tr>
    <td><CopyableCode code="IsRequestable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False.</td>
</tr>
<tr>
    <td><CopyableCode code="Keywords" /></td>
    <td><code>string</code></td>
    <td>One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search.</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationTypeId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationTypeStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="RetryDelayInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once.</td>
</tr>
<tr>
    <td><CopyableCode code="Test" /></td>
    <td><code>string</code></td>
    <td>The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true.</td>
</tr>
<tr>
    <td><CopyableCode code="TestDurationInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification.</td>
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
    <td><a href="#get_qualification_type"><CopyableCode code="get_qualification_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetQualificationTypeoperation retrieves information about a Qualification type using its ID.</td>
</tr>
<tr>
    <td><a href="#list_qualification_types"><CopyableCode code="list_qualification_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListQualificationTypes operation returns a list of Qualification types, filtered by an optional search term.</td>
</tr>
<tr>
    <td><a href="#create_qualification_type"><CopyableCode code="create_qualification_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QualificationTypeStatus"><code>QualificationTypeStatus</code></a></td>
    <td></td>
    <td>The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure.</td>
</tr>
<tr>
    <td><a href="#associate_qualification_with_worker"><CopyableCode code="associate_qualification_with_worker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QualificationTypeId"><code>QualificationTypeId</code></a>, <a href="#parameter-WorkerId"><code>WorkerId</code></a></td>
    <td></td>
    <td>The AssociateQualificationWithWorker operation gives a Worker a Qualification. AssociateQualificationWithWorker does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. You can only assign a Qualification of a Qualification type that you created (using the CreateQualificationType operation). Note: AssociateQualificationWithWorker does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the RejectQualificationRequest operation.</td>
</tr>
<tr>
    <td><a href="#update_qualification_type"><CopyableCode code="update_qualification_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QualificationTypeId"><code>QualificationTypeId</code></a></td>
    <td></td>
    <td>The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</td>
</tr>
<tr>
    <td><a href="#delete_qualification_type"><CopyableCode code="delete_qualification_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteQualificationType deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types. DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</td>
</tr>
<tr>
    <td><a href="#disassociate_qualification_from_worker"><CopyableCode code="disassociate_qualification_from_worker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkerId"><code>WorkerId</code></a>, <a href="#parameter-QualificationTypeId"><code>QualificationTypeId</code></a></td>
    <td></td>
    <td>The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user. You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message.</td>
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
    defaultValue="get_qualification_type"
    values={[
        { label: 'get_qualification_type', value: 'get_qualification_type' },
        { label: 'list_qualification_types', value: 'list_qualification_types' }
    ]}
>
<TabItem value="get_qualification_type">

The GetQualificationTypeoperation retrieves information about a Qualification type using its ID.

```sql
SELECT
AnswerKey,
AutoGranted,
AutoGrantedValue,
CreationTime,
Description,
IsRequestable,
Keywords,
Name,
QualificationTypeId,
QualificationTypeStatus,
RetryDelayInSeconds,
Test,
TestDurationInSeconds
FROM aws.mturk.qualification_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_qualification_types">

The ListQualificationTypes operation returns a list of Qualification types, filtered by an optional search term.

```sql
SELECT
AnswerKey,
AutoGranted,
AutoGrantedValue,
CreationTime,
Description,
IsRequestable,
Keywords,
Name,
QualificationTypeId,
QualificationTypeStatus,
RetryDelayInSeconds,
Test,
TestDurationInSeconds
FROM aws.mturk.qualification_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_qualification_type"
    values={[
        { label: 'create_qualification_type', value: 'create_qualification_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_qualification_type">

The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure.

```sql
INSERT INTO aws.mturk.qualification_types (
Name,
Keywords,
Description,
QualificationTypeStatus,
RetryDelayInSeconds,
Test,
AnswerKey,
TestDurationInSeconds,
AutoGranted,
AutoGrantedValue,
region
)
SELECT 
'{{ Name }}',
'{{ Keywords }}',
'{{ Description }}',
'{{ QualificationTypeStatus }}' /* required */,
{{ RetryDelayInSeconds }},
'{{ Test }}',
'{{ AnswerKey }}',
{{ TestDurationInSeconds }},
{{ AutoGranted }},
{{ AutoGrantedValue }},
'{{ region }}'
RETURNING
QualificationType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: qualification_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the qualification_types resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name you give to the Qualification type. The type name is used to represent the Qualification to Workers, and to find the type using a Qualification type search. It must be unique across all of your Qualification types.
    - name: Keywords
      value: "{{ Keywords }}"
      description: |
        One or more words or phrases that describe the Qualification type, separated by commas. The keywords of a type make the type easier to find during a search.
    - name: Description
      value: "{{ Description }}"
      description: |
        A long description for the Qualification type. On the Amazon Mechanical Turk website, the long description is displayed when a Worker examines a Qualification type.
    - name: QualificationTypeStatus
      value: "{{ QualificationTypeStatus }}"
      description: |
        The initial status of the Qualification type. Constraints: Valid values are: Active | Inactive
      valid_values: ['Active', 'Inactive']
    - name: RetryDelayInSeconds
      value: {{ RetryDelayInSeconds }}
      description: |
        The number of seconds that a Worker must wait after requesting a Qualification of the Qualification type before the worker can retry the Qualification request. Constraints: None. If not specified, retries are disabled and Workers can request a Qualification of this type only once, even if the Worker has not been granted the Qualification. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must delete existing retry-enabled Qualification type and then create a new Qualification type with retries disabled.
    - name: Test
      value: "{{ Test }}"
      description: |
        The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, TestDurationInSeconds must also be specified. Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true. Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.
    - name: AnswerKey
      value: "{{ AnswerKey }}"
      description: |
        The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure. Constraints: Must not be longer than 65535 bytes. Constraints: None. If not specified, you must process Qualification requests manually.
    - name: TestDurationInSeconds
      value: {{ TestDurationInSeconds }}
      description: |
        The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.
    - name: AutoGranted
      value: {{ AutoGranted }}
      description: |
        Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Constraints: If the Test parameter is specified, this parameter cannot be true.
    - name: AutoGrantedValue
      value: {{ AutoGrantedValue }}
      description: |
        The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_qualification_with_worker"
    values={[
        { label: 'associate_qualification_with_worker', value: 'associate_qualification_with_worker' },
        { label: 'update_qualification_type', value: 'update_qualification_type' }
    ]}
>
<TabItem value="associate_qualification_with_worker">

The AssociateQualificationWithWorker operation gives a Worker a Qualification. AssociateQualificationWithWorker does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. You can only assign a Qualification of a Qualification type that you created (using the CreateQualificationType operation). Note: AssociateQualificationWithWorker does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the RejectQualificationRequest operation.

```sql
UPDATE aws.mturk.qualification_types
SET 
QualificationTypeId = '{{ QualificationTypeId }}',
WorkerId = '{{ WorkerId }}',
IntegerValue = {{ IntegerValue }},
SendNotification = {{ SendNotification }}
WHERE 
region = '{{ region }}' --required
AND QualificationTypeId = '{{ QualificationTypeId }}' --required
AND WorkerId = '{{ WorkerId }}' --required;
```
</TabItem>
<TabItem value="update_qualification_type">

The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.

```sql
UPDATE aws.mturk.qualification_types
SET 
QualificationTypeId = '{{ QualificationTypeId }}',
Description = '{{ Description }}',
QualificationTypeStatus = '{{ QualificationTypeStatus }}',
Test = '{{ Test }}',
AnswerKey = '{{ AnswerKey }}',
TestDurationInSeconds = {{ TestDurationInSeconds }},
RetryDelayInSeconds = {{ RetryDelayInSeconds }},
AutoGranted = {{ AutoGranted }},
AutoGrantedValue = {{ AutoGrantedValue }}
WHERE 
region = '{{ region }}' --required
AND QualificationTypeId = '{{ QualificationTypeId }}' --required
RETURNING
QualificationType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_qualification_type"
    values={[
        { label: 'delete_qualification_type', value: 'delete_qualification_type' }
    ]}
>
<TabItem value="delete_qualification_type">

The DeleteQualificationType deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types. DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.

```sql
DELETE FROM aws.mturk.qualification_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_qualification_from_worker"
    values={[
        { label: 'disassociate_qualification_from_worker', value: 'disassociate_qualification_from_worker' }
    ]}
>
<TabItem value="disassociate_qualification_from_worker">

The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user. You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message.

```sql
EXEC aws.mturk.qualification_types.disassociate_qualification_from_worker 
@region='{{ region }}' --required 
@@json=
'{
"WorkerId": "{{ WorkerId }}", 
"QualificationTypeId": "{{ QualificationTypeId }}", 
"Reason": "{{ Reason }}"
}'
;
```
</TabItem>
</Tabs>
