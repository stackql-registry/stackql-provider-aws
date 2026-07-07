--- 
title: git_hub_account_token_names
hide_title: false
hide_table_of_contents: false
keywords:
  - git_hub_account_token_names
  - codedeploy
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

Creates, updates, deletes, gets or lists a <code>git_hub_account_token_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="git_hub_account_token_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.git_hub_account_token_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_git_hub_account_token_names"
    values={[
        { label: 'list_git_hub_account_token_names', value: 'list_git_hub_account_token_names' }
    ]}
>
<TabItem value="list_git_hub_account_token_names">

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
    <td><CopyableCode code="token_name" /></td>
    <td><code>string</code></td>
    <td>A list of names of connections to GitHub accounts.</td>
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
    <td><a href="#list_git_hub_account_token_names"><CopyableCode code="list_git_hub_account_token_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the names of stored connections to GitHub accounts.</td>
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
    defaultValue="list_git_hub_account_token_names"
    values={[
        { label: 'list_git_hub_account_token_names', value: 'list_git_hub_account_token_names' }
    ]}
>
<TabItem value="list_git_hub_account_token_names">

Lists the names of stored connections to GitHub accounts.

```sql
SELECT
token_name
FROM aws.codedeploy.git_hub_account_token_names
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
