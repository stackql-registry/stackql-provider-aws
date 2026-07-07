--- 
title: contact_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_evaluations
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact_evaluation"
    values={[
        { label: 'describe_contact_evaluation', value: 'describe_contact_evaluation' },
        { label: 'list_contact_evaluations', value: 'list_contact_evaluations' },
        { label: 'search_contact_evaluations', value: 'search_contact_evaluations' }
    ]}
>
<TabItem value="describe_contact_evaluation">

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
    <td><CopyableCode code="Evaluation" /></td>
    <td><code>object</code></td>
    <td>Information about the evaluation form completed for a specific contact.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationForm" /></td>
    <td><code>object</code></td>
    <td>Information about the evaluation form.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_evaluations">

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
    <td><CopyableCode code="Acknowledgement" /></td>
    <td><code>object</code></td>
    <td>Information related to evaluation acknowledgement.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoEvaluationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether automated evaluation is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoEvaluationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the contact auto evaluation. (IN_PROGRESS, FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="CalibrationSessionId" /></td>
    <td><code>string</code></td>
    <td>The calibration session ID that this evaluation belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="ContactParticipant" /></td>
    <td><code>object</code></td>
    <td>Information about a contact participant in the evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the contact evaluation resource.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationFormId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationFormTitle" /></td>
    <td><code>string</code></td>
    <td>A title of the evaluation form.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the contact evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationType" /></td>
    <td><code>string</code></td>
    <td>Type of the evaluation. (STANDARD, CALIBRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluatorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the evaluation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Score" /></td>
    <td><code>object</code></td>
    <td>The overall score of the contact evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the contact evaluation. (DRAFT, SUBMITTED, REVIEW_REQUESTED, UNDER_REVIEW)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_contact_evaluations">

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
    <td><CopyableCode code="ApproximateTotalCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of contact evaluations that matched your search query.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationSearchSummaryList" /></td>
    <td><code>array</code></td>
    <td>Contains information about contact evaluations.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#describe_contact_evaluation"><CopyableCode code="describe_contact_evaluation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_id"><code>evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a contact evaluation in the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#list_contact_evaluations"><CopyableCode code="list_contact_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contactId"><code>contactId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists contact evaluations in the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_contact_evaluations"><CopyableCode code="search_contact_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches contact evaluations in an Amazon Connect instance, with optional filtering. Use cases Following are common uses cases for this API: Find contact evaluations by using specific search criteria. Find contact evaluations that are tagged with a specific set of tags. Important things to know A Search operation, unlike a List operation, takes time to index changes to resource (create, update or delete). If you don't see updated information for recently changed contact evaluations, try calling the API again in a few seconds. Endpoints: See Amazon Connect endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#update_contact_evaluation"><CopyableCode code="update_contact_evaluation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_id"><code>evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates details about a contact evaluation in the specified Amazon Connect instance. A contact evaluation must be in draft state. Answers included in the request are merged with existing answers for the given evaluation. An answer or note can be deleted by passing an empty object (&#123;&#125;) to the question identifier.</td>
</tr>
<tr>
    <td><a href="#delete_contact_evaluation"><CopyableCode code="delete_contact_evaluation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_id"><code>evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a contact evaluation in the specified Amazon Connect instance.</td>
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
<tr id="parameter-contactId">
    <td><CopyableCode code="contactId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Amazon Connect.</td>
</tr>
<tr id="parameter-evaluation_id">
    <td><CopyableCode code="evaluation_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the contact evaluation.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. This is not expected to be set because the value returned in the previous response is always null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_contact_evaluation"
    values={[
        { label: 'describe_contact_evaluation', value: 'describe_contact_evaluation' },
        { label: 'list_contact_evaluations', value: 'list_contact_evaluations' },
        { label: 'search_contact_evaluations', value: 'search_contact_evaluations' }
    ]}
>
<TabItem value="describe_contact_evaluation">

Describes a contact evaluation in the specified Amazon Connect instance.

```sql
SELECT
Evaluation,
EvaluationForm
FROM aws.connect.contact_evaluations
WHERE instance_id = '{{ instance_id }}' -- required
AND evaluation_id = '{{ evaluation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_evaluations">

Lists contact evaluations in the specified Amazon Connect instance.

```sql
SELECT
Acknowledgement,
AutoEvaluationEnabled,
AutoEvaluationStatus,
CalibrationSessionId,
ContactParticipant,
CreatedTime,
EvaluationArn,
EvaluationFormId,
EvaluationFormTitle,
EvaluationId,
EvaluationType,
EvaluatorArn,
LastModifiedTime,
Score,
Status
FROM aws.connect.contact_evaluations
WHERE instance_id = '{{ instance_id }}' -- required
AND contactId = '{{ contactId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="search_contact_evaluations">

Searches contact evaluations in an Amazon Connect instance, with optional filtering. Use cases Following are common uses cases for this API: Find contact evaluations by using specific search criteria. Find contact evaluations that are tagged with a specific set of tags. Important things to know A Search operation, unlike a List operation, takes time to index changes to resource (create, update or delete). If you don't see updated information for recently changed contact evaluations, try calling the API again in a few seconds. Endpoints: See Amazon Connect endpoints and quotas.

```sql
SELECT
ApproximateTotalCount,
EvaluationSearchSummaryList,
NextToken
FROM aws.connect.contact_evaluations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_evaluation"
    values={[
        { label: 'update_contact_evaluation', value: 'update_contact_evaluation' }
    ]}
>
<TabItem value="update_contact_evaluation">

Updates details about a contact evaluation in the specified Amazon Connect instance. A contact evaluation must be in draft state. Answers included in the request are merged with existing answers for the given evaluation. An answer or note can be deleted by passing an empty object (&#123;&#125;) to the question identifier.

```sql
UPDATE aws.connect.contact_evaluations
SET 
Answers = '{{ Answers }}',
Notes = '{{ Notes }}',
UpdatedBy = '{{ UpdatedBy }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND evaluation_id = '{{ evaluation_id }}' --required
AND region = '{{ region }}' --required
RETURNING
EvaluationArn,
EvaluationId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_evaluation"
    values={[
        { label: 'delete_contact_evaluation', value: 'delete_contact_evaluation' }
    ]}
>
<TabItem value="delete_contact_evaluation">

Deletes a contact evaluation in the specified Amazon Connect instance.

```sql
DELETE FROM aws.connect.contact_evaluations
WHERE instance_id = '{{ instance_id }}' --required
AND evaluation_id = '{{ evaluation_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
