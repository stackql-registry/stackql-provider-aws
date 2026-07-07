--- 
title: rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_rule_group"
    values={[
        { label: 'describe_rule_group', value: 'describe_rule_group' }
    ]}
>
<TabItem value="describe_rule_group">

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
    <td><CopyableCode code="RuleGroup" /></td>
    <td><code>object</code></td>
    <td>The object that defines the rules in a rule group. This, along with RuleGroupResponse, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup. Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleGroupResponse" /></td>
    <td><code>object</code></td>
    <td>The high-level properties of a rule group. This, along with the RuleGroup, define the rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request. To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_rule_group"><CopyableCode code="describe_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified rule group.</td>
</tr>
<tr>
    <td><a href="#create_rule_group"><CopyableCode code="create_rule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleGroupName"><code>RuleGroupName</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Capacity"><code>Capacity</code></a></td>
    <td></td>
    <td>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. You provide your rule group specification in your request using either RuleGroup or Rules.</td>
</tr>
<tr>
    <td><a href="#update_rule_group"><CopyableCode code="update_rule_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. To update a rule group, first call DescribeRuleGroup to retrieve the current RuleGroup object, update the object as needed, and then provide the updated object to this call.</td>
</tr>
<tr>
    <td><a href="#delete_rule_group"><CopyableCode code="delete_rule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified RuleGroup.</td>
</tr>
<tr>
    <td><a href="#list_rule_groups"><CopyableCode code="list_rule_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.</td>
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
    defaultValue="describe_rule_group"
    values={[
        { label: 'describe_rule_group', value: 'describe_rule_group' }
    ]}
>
<TabItem value="describe_rule_group">

Returns the data objects for the specified rule group.

```sql
SELECT
RuleGroup,
RuleGroupResponse,
UpdateToken
FROM aws.network_firewall.rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule_group"
    values={[
        { label: 'create_rule_group', value: 'create_rule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule_group">

Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. You provide your rule group specification in your request using either RuleGroup or Rules.

```sql
INSERT INTO aws.network_firewall.rule_groups (
RuleGroupName,
RuleGroup,
Rules,
Type,
Description,
Capacity,
Tags,
DryRun,
EncryptionConfiguration,
SourceMetadata,
AnalyzeRuleGroup,
SummaryConfiguration,
region
)
SELECT 
'{{ RuleGroupName }}' /* required */,
'{{ RuleGroup }}',
'{{ Rules }}',
'{{ Type }}' /* required */,
'{{ Description }}',
{{ Capacity }} /* required */,
'{{ Tags }}',
{{ DryRun }},
'{{ EncryptionConfiguration }}',
'{{ SourceMetadata }}',
{{ AnalyzeRuleGroup }},
'{{ SummaryConfiguration }}',
'{{ region }}'
RETURNING
RuleGroupResponse,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rule_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_groups resource.
    - name: RuleGroupName
      value: "{{ RuleGroupName }}"
      description: |
        The descriptive name of the rule group. You can't change the name of a rule group after you create it.
    - name: RuleGroup
      description: |
        An object that defines the rule group rules. You must provide either this rule group setting or a Rules setting, but not both.
      value:
        RuleVariables:
          IPSets: "{{ IPSets }}"
          PortSets: "{{ PortSets }}"
        ReferenceSets:
          IPSetReferences: "{{ IPSetReferences }}"
        RulesSource:
          RulesString: "{{ RulesString }}"
          RulesSourceList:
            Targets:
              - "{{ Targets }}"
            TargetTypes:
              - "{{ TargetTypes }}"
            GeneratedRulesType: "{{ GeneratedRulesType }}"
          StatefulRules:
            - Action: "{{ Action }}"
              Header:
                Protocol: "{{ Protocol }}"
                Source: "{{ Source }}"
                SourcePort: "{{ SourcePort }}"
                Direction: "{{ Direction }}"
                Destination: "{{ Destination }}"
                DestinationPort: "{{ DestinationPort }}"
              RuleOptions: "{{ RuleOptions }}"
          StatelessRulesAndCustomActions:
            StatelessRules:
              - RuleDefinition:
                  MatchAttributes: "{{ MatchAttributes }}"
                  Actions: "{{ Actions }}"
                Priority: {{ Priority }}
            CustomActions:
              - ActionName: "{{ ActionName }}"
                ActionDefinition:
                  PublishMetricAction: "{{ PublishMetricAction }}"
        StatefulRuleOptions:
          RuleOrder: "{{ RuleOrder }}"
    - name: Rules
      value: "{{ Rules }}"
      description: |
        A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups. You must provide either this rules setting or a populated RuleGroup setting, but not both. You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.
    - name: Type
      value: "{{ Type }}"
      description: |
        Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
      valid_values: ['STATELESS', 'STATEFUL', 'STATEFUL_DOMAIN']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the rule group.
    - name: Capacity
      value: {{ Capacity }}
      description: |
        The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group. You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with DryRun set to TRUE. You can't change or exceed this capacity when you update the rule group, so leave room for your rule group to grow. Capacity for a stateless rule group For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group. To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule's match settings: A match setting with no criteria specified has a value of 1. A match setting with Any specified has a value of 1. All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ["UDP"] and a source setting ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3. A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification for each of the other match settings has a capacity requirement of 6. Capacity for a stateful rule group For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group.
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DryRun
      value: {{ DryRun }}
      description: |
        Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request. If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid. If set to FALSE, Network Firewall makes the requested changes to your resources.
    - name: EncryptionConfiguration
      description: |
        A complex type that contains settings for encryption of your rule group resources.
      value:
        KeyId: "{{ KeyId }}"
        Type: "{{ Type }}"
    - name: SourceMetadata
      description: |
        A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group.
      value:
        SourceArn: "{{ SourceArn }}"
        SourceUpdateToken: "{{ SourceUpdateToken }}"
    - name: AnalyzeRuleGroup
      value: {{ AnalyzeRuleGroup }}
      description: |
        Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set DryRun to TRUE.
    - name: SummaryConfiguration
      description: |
        An object that contains a RuleOptions array of strings. You use RuleOptions to determine which of the following RuleSummary values are returned in response to DescribeRuleGroupSummary. Metadata - returns Msg SID
      value:
        RuleOptions:
          - "{{ RuleOptions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule_group"
    values={[
        { label: 'update_rule_group', value: 'update_rule_group' }
    ]}
>
<TabItem value="update_rule_group">

Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. To update a rule group, first call DescribeRuleGroup to retrieve the current RuleGroup object, update the object as needed, and then provide the updated object to this call.

```sql
UPDATE aws.network_firewall.rule_groups
SET 
UpdateToken = '{{ UpdateToken }}',
RuleGroupArn = '{{ RuleGroupArn }}',
RuleGroupName = '{{ RuleGroupName }}',
RuleGroup = '{{ RuleGroup }}',
Rules = '{{ Rules }}',
Type = '{{ Type }}',
Description = '{{ Description }}',
DryRun = {{ DryRun }},
EncryptionConfiguration = '{{ EncryptionConfiguration }}',
SourceMetadata = '{{ SourceMetadata }}',
AnalyzeRuleGroup = {{ AnalyzeRuleGroup }},
SummaryConfiguration = '{{ SummaryConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
RuleGroupResponse,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule_group"
    values={[
        { label: 'delete_rule_group', value: 'delete_rule_group' }
    ]}
>
<TabItem value="delete_rule_group">

Deletes the specified RuleGroup.

```sql
DELETE FROM aws.network_firewall.rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_rule_groups"
    values={[
        { label: 'list_rule_groups', value: 'list_rule_groups' }
    ]}
>
<TabItem value="list_rule_groups">

Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.

```sql
EXEC aws.network_firewall.rule_groups.list_rule_groups 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Scope": "{{ Scope }}", 
"ManagedType": "{{ ManagedType }}", 
"SubscriptionStatus": "{{ SubscriptionStatus }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
</Tabs>
