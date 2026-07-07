--- 
title: experiment_target_account_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_target_account_configurations
  - fis
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

Creates, updates, deletes, gets or lists an <code>experiment_target_account_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_target_account_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fis.experiment_target_account_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_experiment_target_account_configuration"
    values={[
        { label: 'get_experiment_target_account_configuration', value: 'get_experiment_target_account_configuration' },
        { label: 'list_experiment_target_account_configurations', value: 'list_experiment_target_account_configurations' }
    ]}
>
<TabItem value="get_experiment_target_account_configuration">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the target account. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role for the target account. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiment_target_account_configurations">

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
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetAccountConfigurations" /></td>
    <td><code>array</code></td>
    <td>The target account configurations.</td>
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
    <td><a href="#get_experiment_target_account_configuration"><CopyableCode code="get_experiment_target_account_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified target account configuration of the experiment.</td>
</tr>
<tr>
    <td><a href="#list_experiment_target_account_configurations"><CopyableCode code="list_experiment_target_account_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the target account configurations of the specified experiment.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the target account.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the experiment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_experiment_target_account_configuration"
    values={[
        { label: 'get_experiment_target_account_configuration', value: 'get_experiment_target_account_configuration' },
        { label: 'list_experiment_target_account_configurations', value: 'list_experiment_target_account_configurations' }
    ]}
>
<TabItem value="get_experiment_target_account_configuration">

Gets information about the specified target account configuration of the experiment.

```sql
SELECT
accountId,
description,
roleArn
FROM aws.fis.experiment_target_account_configurations
WHERE id = '{{ id }}' -- required
AND account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiment_target_account_configurations">

Lists the target account configurations of the specified experiment.

```sql
SELECT
nextToken,
targetAccountConfigurations
FROM aws.fis.experiment_target_account_configurations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
