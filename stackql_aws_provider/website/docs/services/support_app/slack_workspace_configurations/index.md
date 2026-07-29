--- 
title: slack_workspace_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_workspace_configurations
  - support_app
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

Creates, updates, deletes, gets or lists a <code>slack_workspace_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_workspace_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support_app.slack_workspace_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_slack_workspace_configurations"
    values={[
        { label: 'list_slack_workspace_configurations', value: 'list_slack_workspace_configurations' }
    ]}
>
<TabItem value="list_slack_workspace_configurations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The point where pagination should resume when the response returns only partial results. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_workspace_configurations" /></td>
    <td><code>array</code></td>
    <td>The configurations for a Slack workspace.</td>
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
    <td><a href="#list_slack_workspace_configurations"><CopyableCode code="list_slack_workspace_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Slack workspace configurations for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_slack_workspace_configuration"><CopyableCode code="delete_slack_workspace_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.</td>
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
    defaultValue="list_slack_workspace_configurations"
    values={[
        { label: 'list_slack_workspace_configurations', value: 'list_slack_workspace_configurations' }
    ]}
>
<TabItem value="list_slack_workspace_configurations">

Lists the Slack workspace configurations for an Amazon Web Services account.

```sql
SELECT
next_token,
slack_workspace_configurations
FROM aws.support_app.slack_workspace_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slack_workspace_configuration"
    values={[
        { label: 'delete_slack_workspace_configuration', value: 'delete_slack_workspace_configuration' }
    ]}
>
<TabItem value="delete_slack_workspace_configuration">

Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.

```sql
DELETE FROM aws.support_app.slack_workspace_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
