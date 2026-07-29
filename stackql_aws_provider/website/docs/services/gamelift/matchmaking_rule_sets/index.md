--- 
title: matchmaking_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmaking_rule_sets
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

Creates, updates, deletes, gets or lists a <code>matchmaking_rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="matchmaking_rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.matchmaking_rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_matchmaking_rule_sets"
    values={[
        { label: 'describe_matchmaking_rule_sets', value: 'describe_matchmaking_rule_sets' }
    ]}
>
<TabItem value="describe_matchmaking_rule_sets">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::matchmakingruleset/&lt;ruleset name&gt;. In a GameLift rule set ARN, the resource ID matches the RuleSetName value. (pattern: &lt;code&gt;^arn:.*:matchmakingruleset\/&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_body" /></td>
    <td><code>string</code></td>
    <td>A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the matchmaking rule set (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_matchmaking_rule_sets"><CopyableCode code="describe_matchmaking_rule_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. Learn more Build a rule set</td>
</tr>
<tr>
    <td><a href="#create_matchmaking_rule_set"><CopyableCode code="create_matchmaking_rule_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RuleSetBody"><code>RuleSetBody</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with. Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using ValidateMatchmakingRuleSet before creating a new rule set. Learn more Build a rule set Design a matchmaker Matchmaking with FlexMatch</td>
</tr>
<tr>
    <td><a href="#delete_matchmaking_rule_set"><CopyableCode code="delete_matchmaking_rule_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. Learn more Build a rule set</td>
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
    defaultValue="describe_matchmaking_rule_sets"
    values={[
        { label: 'describe_matchmaking_rule_sets', value: 'describe_matchmaking_rule_sets' }
    ]}
>
<TabItem value="describe_matchmaking_rule_sets">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. Learn more Build a rule set

```sql
SELECT
creation_time,
rule_set_arn,
rule_set_body,
rule_set_name
FROM aws.gamelift.matchmaking_rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_matchmaking_rule_set"
    values={[
        { label: 'create_matchmaking_rule_set', value: 'create_matchmaking_rule_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_matchmaking_rule_set">

This API works with the following fleet types: EC2, Anywhere, Container Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with. Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using ValidateMatchmakingRuleSet before creating a new rule set. Learn more Build a rule set Design a matchmaker Matchmaking with FlexMatch

```sql
INSERT INTO aws.gamelift.matchmaking_rule_sets (
Name,
RuleSetBody,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ RuleSetBody }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
rule_set
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: matchmaking_rule_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the matchmaking_rule_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional name field in the rule set body.
    - name: RuleSetBody
      value: "{{ RuleSetBody }}"
      description: |
        A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.
    - name: Tags
      description: |
        A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_matchmaking_rule_set"
    values={[
        { label: 'delete_matchmaking_rule_set', value: 'delete_matchmaking_rule_set' }
    ]}
>
<TabItem value="delete_matchmaking_rule_set">

This API works with the following fleet types: EC2, Anywhere, Container Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. Learn more Build a rule set

```sql
DELETE FROM aws.gamelift.matchmaking_rule_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
