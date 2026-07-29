--- 
title: challenge_passwords
hide_title: false
hide_table_of_contents: false
keywords:
  - challenge_passwords
  - pca_connector_scep
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

Creates, updates, deletes, gets or lists a <code>challenge_passwords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="challenge_passwords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_scep.challenge_passwords" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_challenge_password"
    values={[
        { label: 'get_challenge_password', value: 'get_challenge_password' }
    ]}
>
<TabItem value="get_challenge_password">

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
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The SCEP challenge password.</td>
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
    <td><a href="#get_challenge_password"><CopyableCode code="get_challenge_password" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-challenge_arn"><code>challenge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the challenge password for the specified Challenge.</td>
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
<tr id="parameter-challenge_arn">
    <td><CopyableCode code="challenge_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the challenge.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_challenge_password"
    values={[
        { label: 'get_challenge_password', value: 'get_challenge_password' }
    ]}
>
<TabItem value="get_challenge_password">

Retrieves the challenge password for the specified Challenge.

```sql
SELECT
password
FROM aws.pca_connector_scep.challenge_passwords
WHERE challenge_arn = '{{ challenge_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
