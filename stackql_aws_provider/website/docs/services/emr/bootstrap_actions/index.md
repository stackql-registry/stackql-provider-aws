--- 
title: bootstrap_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - bootstrap_actions
  - emr
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

Creates, updates, deletes, gets or lists a <code>bootstrap_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bootstrap_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.bootstrap_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bootstrap_actions"
    values={[
        { label: 'list_bootstrap_actions', value: 'list_bootstrap_actions' }
    ]}
>
<TabItem value="list_bootstrap_actions">

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
    <td><CopyableCode code="args" /></td>
    <td><code>array</code></td>
    <td>Arguments for Amazon EMR to pass to the command for execution.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the command.</td>
</tr>
<tr>
    <td><CopyableCode code="script_path" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 location of the command script.</td>
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
    <td><a href="#list_bootstrap_actions"><CopyableCode code="list_bootstrap_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the bootstrap actions associated with a cluster.</td>
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
    defaultValue="list_bootstrap_actions"
    values={[
        { label: 'list_bootstrap_actions', value: 'list_bootstrap_actions' }
    ]}
>
<TabItem value="list_bootstrap_actions">

Provides information about the bootstrap actions associated with a cluster.

```sql
SELECT
args,
name,
script_path
FROM aws.emr.bootstrap_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
