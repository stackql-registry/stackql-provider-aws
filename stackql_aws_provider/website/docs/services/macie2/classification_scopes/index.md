--- 
title: classification_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - classification_scopes
  - macie2
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

Creates, updates, deletes, gets or lists a <code>classification_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="classification_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.classification_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_classification_scope"
    values={[
        { label: 'get_classification_scope', value: 'get_classification_scope' },
        { label: 'list_classification_scopes', value: 'list_classification_scopes' }
    ]}
>
<TabItem value="get_classification_scope">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the classification scope. (pattern: &lt;code&gt;^&#91;0-9a-z&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the classification scope: automated-sensitive-data-discovery. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_\\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3" /></td>
    <td><code>object</code></td>
    <td>The S3 buckets that are excluded from automated sensitive data discovery.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_classification_scopes">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the classification scope. (pattern: &lt;code&gt;^&#91;0-9a-z&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the classification scope: automated-sensitive-data-discovery. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_\\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_classification_scope"><CopyableCode code="get_classification_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the classification scope settings for an account.</td>
</tr>
<tr>
    <td><a href="#list_classification_scopes"><CopyableCode code="list_classification_scopes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a subset of information about the classification scope for an account.</td>
</tr>
<tr>
    <td><a href="#update_classification_scope"><CopyableCode code="update_classification_scope" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the classification scope settings for an account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Macie resource that the request applies to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the classification scope to retrieve the unique identifier for.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_classification_scope"
    values={[
        { label: 'get_classification_scope', value: 'get_classification_scope' },
        { label: 'list_classification_scopes', value: 'list_classification_scopes' }
    ]}
>
<TabItem value="get_classification_scope">

Retrieves the classification scope settings for an account.

```sql
SELECT
id,
name,
s3
FROM aws.macie2.classification_scopes
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_classification_scopes">

Retrieves a subset of information about the classification scope for an account.

```sql
SELECT
id,
name
FROM aws.macie2.classification_scopes
WHERE region = '{{ region }}' -- required
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_classification_scope"
    values={[
        { label: 'update_classification_scope', value: 'update_classification_scope' }
    ]}
>
<TabItem value="update_classification_scope">

Updates the classification scope settings for an account.

```sql
UPDATE aws.macie2.classification_scopes
SET 
s3 = '{{ s3 }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
