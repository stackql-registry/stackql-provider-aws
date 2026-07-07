--- 
title: matchmakings
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmakings
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>matchmakings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="matchmakings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.matchmakings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_matchmaking"
    values={[
        { label: 'describe_matchmaking', value: 'describe_matchmaking' }
    ]}
>
<TabItem value="describe_matchmaking">

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
    <td><CopyableCode code="TicketList" /></td>
    <td><code>array</code></td>
    <td>A collection of existing matchmaking ticket objects matching the request.</td>
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
    <td><a href="#describe_matchmaking"><CopyableCode code="describe_matchmaking" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists. This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration. Learn more Add FlexMatch to a game client Set Up FlexMatch event notification</td>
</tr>
<tr>
    <td><a href="#validate_matchmaking_rule_set"><CopyableCode code="validate_matchmaking_rule_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleSetBody"><code>RuleSetBody</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string. Learn more Build a rule set</td>
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
    defaultValue="describe_matchmaking"
    values={[
        { label: 'describe_matchmaking', value: 'describe_matchmaking' }
    ]}
>
<TabItem value="describe_matchmaking">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists. This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration. Learn more Add FlexMatch to a game client Set Up FlexMatch event notification

```sql
SELECT
TicketList
FROM aws.gamelift.matchmakings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_matchmaking_rule_set"
    values={[
        { label: 'validate_matchmaking_rule_set', value: 'validate_matchmaking_rule_set' }
    ]}
>
<TabItem value="validate_matchmaking_rule_set">

This API works with the following fleet types: EC2, Anywhere, Container Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string. Learn more Build a rule set

```sql
EXEC aws.gamelift.matchmakings.validate_matchmaking_rule_set 
@region='{{ region }}' --required 
@@json=
'{
"RuleSetBody": "{{ RuleSetBody }}"
}'
;
```
</TabItem>
</Tabs>
