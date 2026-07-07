--- 
title: outcomes
hide_title: false
hide_table_of_contents: false
keywords:
  - outcomes
  - frauddetector
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

Creates, updates, deletes, gets or lists an <code>outcomes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outcomes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.outcomes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outcomes"
    values={[
        { label: 'get_outcomes', value: 'get_outcomes' }
    ]}
>
<TabItem value="get_outcomes">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page token for subsequent requests.</td>
</tr>
<tr>
    <td><CopyableCode code="outcomes" /></td>
    <td><code>array</code></td>
    <td>The outcomes.</td>
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
    <td><a href="#get_outcomes"><CopyableCode code="get_outcomes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#put_outcome"><CopyableCode code="put_outcome" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates or updates an outcome.</td>
</tr>
<tr>
    <td><a href="#delete_outcome"><CopyableCode code="delete_outcome" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an outcome. You cannot delete an outcome that is used in a rule version. When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="get_outcomes"
    values={[
        { label: 'get_outcomes', value: 'get_outcomes' }
    ]}
>
<TabItem value="get_outcomes">

Gets one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
nextToken,
outcomes
FROM aws.frauddetector.outcomes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_outcome"
    values={[
        { label: 'put_outcome', value: 'put_outcome' }
    ]}
>
<TabItem value="put_outcome">

Creates or updates an outcome.

```sql
REPLACE aws.frauddetector.outcomes
SET 
name = '{{ name }}',
description = '{{ description }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_outcome"
    values={[
        { label: 'delete_outcome', value: 'delete_outcome' }
    ]}
>
<TabItem value="delete_outcome">

Deletes an outcome. You cannot delete an outcome that is used in a rule version. When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.outcomes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
