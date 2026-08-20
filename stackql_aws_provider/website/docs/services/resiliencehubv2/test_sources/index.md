--- 
title: test_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - test_sources
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>test_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_sources"
    values={[
        { label: 'list_test_sources', value: 'list_test_sources' }
    ]}
>
<TabItem value="list_test_sources">

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
    <td><CopyableCode code="observability_alarm" /></td>
    <td><code>object</code></td>
    <td>A configured observability alarm.</td>
</tr>
<tr>
    <td><CopyableCode code="success_criteria_alarm" /></td>
    <td><code>object</code></td>
    <td>A configured success criteria alarm.</td>
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
    <td><a href="#list_test_sources"><CopyableCode code="list_test_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_id"><code>test_id</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the monitoring sources attached to a test, optionally filtered by type.</td>
</tr>
<tr>
    <td><a href="#put_test_sources"><CopyableCode code="put_test_sources" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testId"><code>testId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-testSources"><code>testSources</code></a></td>
    <td></td>
    <td>Adds or updates the monitoring sources on a test. The operation is transactional — either every source is written or the call fails and nothing is written.</td>
</tr>
<tr>
    <td><a href="#delete_test_sources"><CopyableCode code="delete_test_sources" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes monitoring sources from a test. The operation is transactional and idempotent — removing a source that is not attached is a no-op.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service the test belongs to.</td>
</tr>
<tr id="parameter-test_id">
    <td><CopyableCode code="test_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test to list sources for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter sources by type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_sources"
    values={[
        { label: 'list_test_sources', value: 'list_test_sources' }
    ]}
>
<TabItem value="list_test_sources">

Lists the monitoring sources attached to a test, optionally filtered by type.

```sql
SELECT
observability_alarm,
success_criteria_alarm
FROM aws.resiliencehubv2.test_sources
WHERE test_id = '{{ test_id }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_test_sources"
    values={[
        { label: 'put_test_sources', value: 'put_test_sources' }
    ]}
>
<TabItem value="put_test_sources">

Adds or updates the monitoring sources on a test. The operation is transactional — either every source is written or the call fails and nothing is written.

```sql
REPLACE aws.resiliencehubv2.test_sources
SET 
testId = '{{ testId }}',
serviceArn = '{{ serviceArn }}',
testSources = '{{ testSources }}'
WHERE 
region = '{{ region }}' --required
AND testId = '{{ testId }}' --required
AND serviceArn = '{{ serviceArn }}' --required
AND testSources = '{{ testSources }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test_sources"
    values={[
        { label: 'delete_test_sources', value: 'delete_test_sources' }
    ]}
>
<TabItem value="delete_test_sources">

Removes monitoring sources from a test. The operation is transactional and idempotent — removing a source that is not attached is a no-op.

```sql
DELETE FROM aws.resiliencehubv2.test_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
