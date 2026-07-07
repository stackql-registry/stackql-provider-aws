--- 
title: programmatic_access_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - programmatic_access_credentials
  - finspace_data
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

Creates, updates, deletes, gets or lists a <code>programmatic_access_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="programmatic_access_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.programmatic_access_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_programmatic_access_credentials"
    values={[
        { label: 'get_programmatic_access_credentials', value: 'get_programmatic_access_credentials' }
    ]}
>
<TabItem value="get_programmatic_access_credentials">

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
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>Returns the programmatic credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="durationInMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Returns the duration in which the credentials will remain valid.</td>
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
    <td><a href="#get_programmatic_access_credentials"><CopyableCode code="get_programmatic_access_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-durationInMinutes"><code>durationInMinutes</code></a></td>
    <td>Request programmatic credentials to use with FinSpace SDK. For more information, see Step 2. Access credentials programmatically using IAM access key id and secret access key.</td>
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
<tr id="parameter-environmentId">
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The FinSpace environment identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-durationInMinutes">
    <td><CopyableCode code="durationInMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time duration in which the credentials remain valid.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_programmatic_access_credentials"
    values={[
        { label: 'get_programmatic_access_credentials', value: 'get_programmatic_access_credentials' }
    ]}
>
<TabItem value="get_programmatic_access_credentials">

Request programmatic credentials to use with FinSpace SDK. For more information, see Step 2. Access credentials programmatically using IAM access key id and secret access key.

```sql
SELECT
credentials,
durationInMinutes
FROM aws.finspace_data.programmatic_access_credentials
WHERE environmentId = '{{ environmentId }}' -- required
AND region = '{{ region }}' -- required
AND durationInMinutes = '{{ durationInMinutes }}'
;
```
</TabItem>
</Tabs>
