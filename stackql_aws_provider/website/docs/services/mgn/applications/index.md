--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - mgn
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_applications"
    values={[
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="list_applications">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Application name. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_aggregated_status" /></td>
    <td><code>object</code></td>
    <td>Application aggregated status.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>Application ID. (pattern: &lt;code&gt;app-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Application ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string</code></td>
    <td>Application creation dateTime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Application description. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_archived" /></td>
    <td><code>boolean</code></td>
    <td>Application archival status.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date_time" /></td>
    <td><code>string</code></td>
    <td>Application last modified dateTime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Application tags.</td>
</tr>
<tr>
    <td><CopyableCode code="wave_id" /></td>
    <td><code>string</code></td>
    <td>Application wave ID. (pattern: &lt;code&gt;wave-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all applications or multiple applications by ID.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create application.</td>
</tr>
<tr>
    <td><a href="#associate_applications"><CopyableCode code="associate_applications" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-waveID"><code>waveID</code></a>, <a href="#parameter-applicationIDs"><code>applicationIDs</code></a></td>
    <td></td>
    <td>Associate applications to wave.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationID"><code>applicationID</code></a></td>
    <td></td>
    <td>Update application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete application.</td>
</tr>
<tr>
    <td><a href="#archive_application"><CopyableCode code="archive_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationID"><code>applicationID</code></a></td>
    <td></td>
    <td>Archive application.</td>
</tr>
<tr>
    <td><a href="#disassociate_applications"><CopyableCode code="disassociate_applications" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-waveID"><code>waveID</code></a>, <a href="#parameter-applicationIDs"><code>applicationIDs</code></a></td>
    <td></td>
    <td>Disassociate applications from wave.</td>
</tr>
<tr>
    <td><a href="#unarchive_application"><CopyableCode code="unarchive_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationID"><code>applicationID</code></a></td>
    <td></td>
    <td>Unarchive application.</td>
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
    defaultValue="list_applications"
    values={[
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="list_applications">

Retrieves all applications or multiple applications by ID.

```sql
SELECT
name,
application_aggregated_status,
application_id,
arn,
creation_date_time,
description,
is_archived,
last_modified_date_time,
tags,
wave_id
FROM aws.mgn.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Create application.

```sql
INSERT INTO aws.mgn.applications (
name,
description,
tags,
accountID,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ accountID }}',
'{{ region }}'
RETURNING
name,
application_aggregated_status,
application_id,
arn,
creation_date_time,
description,
is_archived,
last_modified_date_time,
tags,
wave_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: accountID
      value: "{{ accountID }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_applications"
    values={[
        { label: 'associate_applications', value: 'associate_applications' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="associate_applications">

Associate applications to wave.

```sql
UPDATE aws.mgn.applications
SET 
waveID = '{{ waveID }}',
applicationIDs = '{{ applicationIDs }}',
accountID = '{{ accountID }}'
WHERE 
region = '{{ region }}' --required
AND waveID = '{{ waveID }}' --required
AND applicationIDs = '{{ applicationIDs }}' --required;
```
</TabItem>
<TabItem value="update_application">

Update application.

```sql
UPDATE aws.mgn.applications
SET 
applicationID = '{{ applicationID }}',
name = '{{ name }}',
description = '{{ description }}',
accountID = '{{ accountID }}'
WHERE 
region = '{{ region }}' --required
AND applicationID = '{{ applicationID }}' --required
RETURNING
name,
application_aggregated_status,
application_id,
arn,
creation_date_time,
description,
is_archived,
last_modified_date_time,
tags,
wave_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Delete application.

```sql
DELETE FROM aws.mgn.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="archive_application"
    values={[
        { label: 'archive_application', value: 'archive_application' },
        { label: 'disassociate_applications', value: 'disassociate_applications' },
        { label: 'unarchive_application', value: 'unarchive_application' }
    ]}
>
<TabItem value="archive_application">

Archive application.

```sql
EXEC aws.mgn.applications.archive_application 
@region='{{ region }}' --required 
@@json=
'{
"applicationID": "{{ applicationID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_applications">

Disassociate applications from wave.

```sql
EXEC aws.mgn.applications.disassociate_applications 
@region='{{ region }}' --required 
@@json=
'{
"waveID": "{{ waveID }}", 
"applicationIDs": "{{ applicationIDs }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
<TabItem value="unarchive_application">

Unarchive application.

```sql
EXEC aws.mgn.applications.unarchive_application 
@region='{{ region }}' --required 
@@json=
'{
"applicationID": "{{ applicationID }}", 
"accountID": "{{ accountID }}"
}'
;
```
</TabItem>
</Tabs>
