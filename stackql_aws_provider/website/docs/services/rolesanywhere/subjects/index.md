--- 
title: subjects
hide_title: false
hide_table_of_contents: false
keywords:
  - subjects
  - rolesanywhere
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

Creates, updates, deletes, gets or lists a <code>subjects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subjects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rolesanywhere.subjects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subject"
    values={[
        { label: 'get_subject', value: 'get_subject' },
        { label: 'list_subjects', value: 'list_subjects' }
    ]}
>
<TabItem value="get_subject">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the subject was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>The temporary session credentials vended at the last authenticating call with this subject.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>The enabled status of the subject.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_properties" /></td>
    <td><code>array</code></td>
    <td>The specified instance properties associated with the request.</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp of the last time this subject requested temporary session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_id" /></td>
    <td><code>string</code></td>
    <td>The id of the resource (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the subject was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="x_509_subject" /></td>
    <td><code>string</code></td>
    <td>The x509 principal identifier of the authenticating certificate.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subjects">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 time stamp of when the certificate was first used in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>The enabled status of the subject.</td>
</tr>
<tr>
    <td><CopyableCode code="last_seen_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_id" /></td>
    <td><code>string</code></td>
    <td>The id of the resource. (pattern: &lt;code&gt;.*&#91;a-f0-9&#93;&#123;8&#125;-(&#91;a-z0-9&#93;&#123;4&#125;-)&#123;3&#125;&#91;a-z0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 timestamp when the subject was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="x_509_subject" /></td>
    <td><code>string</code></td>
    <td>The x509 principal identifier of the authenticating certificate.</td>
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
    <td><a href="#get_subject"><CopyableCode code="get_subject" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject_id"><code>subject_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a subject, which associates a certificate identity with authentication attempts. The subject stores auditing information such as the status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. Required permissions: rolesanywhere:GetSubject.</td>
</tr>
<tr>
    <td><a href="#list_subjects"><CopyableCode code="list_subjects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the subjects in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListSubjects.</td>
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
<tr id="parameter-subject_id">
    <td><CopyableCode code="subject_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the subject.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of resources in the paginated list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subject"
    values={[
        { label: 'get_subject', value: 'get_subject' },
        { label: 'list_subjects', value: 'list_subjects' }
    ]}
>
<TabItem value="get_subject">

Gets a subject, which associates a certificate identity with authentication attempts. The subject stores auditing information such as the status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. Required permissions: rolesanywhere:GetSubject.

```sql
SELECT
created_at,
credentials,
enabled,
instance_properties,
last_seen_at,
subject_arn,
subject_id,
updated_at,
x_509_subject
FROM aws.rolesanywhere.subjects
WHERE subject_id = '{{ subject_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subjects">

Lists the subjects in the authenticated account and Amazon Web Services Region. Required permissions: rolesanywhere:ListSubjects.

```sql
SELECT
created_at,
enabled,
last_seen_at,
subject_arn,
subject_id,
updated_at,
x_509_subject
FROM aws.rolesanywhere.subjects
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>
