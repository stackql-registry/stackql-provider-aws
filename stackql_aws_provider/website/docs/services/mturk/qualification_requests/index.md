--- 
title: qualification_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - qualification_requests
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

Creates, updates, deletes, gets or lists a <code>qualification_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qualification_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.qualification_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_qualification_requests"
    values={[
        { label: 'list_qualification_requests', value: 'list_qualification_requests' }
    ]}
>
<TabItem value="list_qualification_requests">

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
    <td><CopyableCode code="answer" /></td>
    <td><code>string</code></td>
    <td>The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="qualification_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Qualification request, a unique identifier generated when the request was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="qualification_type_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test.</td>
</tr>
<tr>
    <td><CopyableCode code="test" /></td>
    <td><code>string</code></td>
    <td>The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker requesting the Qualification. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_qualification_requests"><CopyableCode code="list_qualification_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation.</td>
</tr>
<tr>
    <td><a href="#accept_qualification_request"><CopyableCode code="accept_qualification_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QualificationRequestId"><code>QualificationRequestId</code></a></td>
    <td></td>
    <td>The AcceptQualificationRequest operation approves a Worker's request for a Qualification. Only the owner of the Qualification type can grant a Qualification request for that type. A successful request for the AcceptQualificationRequest operation returns with no errors and an empty body.</td>
</tr>
<tr>
    <td><a href="#reject_qualification_request"><CopyableCode code="reject_qualification_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QualificationRequestId"><code>QualificationRequestId</code></a></td>
    <td></td>
    <td>The RejectQualificationRequest operation rejects a user's request for a Qualification. You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</td>
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
    defaultValue="list_qualification_requests"
    values={[
        { label: 'list_qualification_requests', value: 'list_qualification_requests' }
    ]}
>
<TabItem value="list_qualification_requests">

The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation.

```sql
SELECT
answer,
qualification_request_id,
qualification_type_id,
submit_time,
test,
worker_id
FROM aws.mturk.qualification_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_qualification_request"
    values={[
        { label: 'accept_qualification_request', value: 'accept_qualification_request' },
        { label: 'reject_qualification_request', value: 'reject_qualification_request' }
    ]}
>
<TabItem value="accept_qualification_request">

The AcceptQualificationRequest operation approves a Worker's request for a Qualification. Only the owner of the Qualification type can grant a Qualification request for that type. A successful request for the AcceptQualificationRequest operation returns with no errors and an empty body.

```sql
EXEC aws.mturk.qualification_requests.accept_qualification_request 
@region='{{ region }}' --required 
@@json=
'{
"QualificationRequestId": "{{ QualificationRequestId }}", 
"IntegerValue": {{ IntegerValue }}
}'
;
```
</TabItem>
<TabItem value="reject_qualification_request">

The RejectQualificationRequest operation rejects a user's request for a Qualification. You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.

```sql
EXEC aws.mturk.qualification_requests.reject_qualification_request 
@region='{{ region }}' --required 
@@json=
'{
"QualificationRequestId": "{{ QualificationRequestId }}", 
"Reason": "{{ Reason }}"
}'
;
```
</TabItem>
</Tabs>
