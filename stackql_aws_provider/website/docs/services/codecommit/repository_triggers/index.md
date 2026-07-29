--- 
title: repository_triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_triggers
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>repository_triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.repository_triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_triggers"
    values={[
        { label: 'get_repository_triggers', value: 'get_repository_triggers' }
    ]}
>
<TabItem value="get_repository_triggers">

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
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID for the trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>The JSON block of configuration information for each trigger.</td>
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
    <td><a href="#get_repository_triggers"><CopyableCode code="get_repository_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about triggers configured for a repository.</td>
</tr>
<tr>
    <td><a href="#put_repository_triggers"><CopyableCode code="put_repository_triggers" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-triggers"><code>triggers</code></a></td>
    <td></td>
    <td>Replaces all triggers for a repository. Used to create or delete triggers.</td>
</tr>
<tr>
    <td><a href="#test_repository_triggers"><CopyableCode code="test_repository_triggers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-triggers"><code>triggers</code></a></td>
    <td></td>
    <td>Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.</td>
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
    defaultValue="get_repository_triggers"
    values={[
        { label: 'get_repository_triggers', value: 'get_repository_triggers' }
    ]}
>
<TabItem value="get_repository_triggers">

Gets information about triggers configured for a repository.

```sql
SELECT
configuration_id,
triggers
FROM aws.codecommit.repository_triggers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_repository_triggers"
    values={[
        { label: 'put_repository_triggers', value: 'put_repository_triggers' }
    ]}
>
<TabItem value="put_repository_triggers">

Replaces all triggers for a repository. Used to create or delete triggers.

```sql
REPLACE aws.codecommit.repository_triggers
SET 
repositoryName = '{{ repositoryName }}',
triggers = '{{ triggers }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND triggers = '{{ triggers }}' --required
RETURNING
configuration_id;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_repository_triggers"
    values={[
        { label: 'test_repository_triggers', value: 'test_repository_triggers' }
    ]}
>
<TabItem value="test_repository_triggers">

Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.

```sql
EXEC aws.codecommit.repository_triggers.test_repository_triggers 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"triggers": "{{ triggers }}"
}'
;
```
</TabItem>
</Tabs>
