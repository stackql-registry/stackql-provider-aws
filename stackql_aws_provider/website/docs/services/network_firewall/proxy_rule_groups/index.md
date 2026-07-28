--- 
title: proxy_rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - proxy_rule_groups
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

Creates, updates, deletes, gets or lists a <code>proxy_rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proxy_rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.proxy_rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_proxy_rule_group"
    values={[
        { label: 'describe_proxy_rule_group', value: 'describe_proxy_rule_group' },
        { label: 'list_proxy_rule_groups', value: 'list_proxy_rule_groups' }
    ]}
>
<TabItem value="describe_proxy_rule_group">

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
    <td><CopyableCode code="ProxyRuleGroup" /></td>
    <td><code>object</code></td>
    <td>The configuration for the specified proxy rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request. To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_proxy_rule_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a proxy rule group. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_proxy_rule_group"><CopyableCode code="describe_proxy_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified proxy rule group.</td>
</tr>
<tr>
    <td><a href="#list_proxy_rule_groups"><CopyableCode code="list_proxy_rule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the proxy rule groups that you have defined. Depending on your setting for max results and the number of proxy rule groups, a single call might not return the full list.</td>
</tr>
<tr>
    <td><a href="#create_proxy_rule_group"><CopyableCode code="create_proxy_rule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProxyRuleGroupName"><code>ProxyRuleGroupName</code></a></td>
    <td></td>
    <td>Creates an Network Firewall ProxyRuleGroup Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations. To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxy rule groups, use ListProxyRuleGroups and DescribeProxyRuleGroup. To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.</td>
</tr>
<tr>
    <td><a href="#update_proxy_rule_group_priorities"><CopyableCode code="update_proxy_rule_group_priorities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleGroups"><code>RuleGroups</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates proxy rule group priorities within a proxy configuration.</td>
</tr>
<tr>
    <td><a href="#delete_proxy_rule_group"><CopyableCode code="delete_proxy_rule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ProxyRuleGroup.</td>
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
    defaultValue="describe_proxy_rule_group"
    values={[
        { label: 'describe_proxy_rule_group', value: 'describe_proxy_rule_group' },
        { label: 'list_proxy_rule_groups', value: 'list_proxy_rule_groups' }
    ]}
>
<TabItem value="describe_proxy_rule_group">

Returns the data objects for the specified proxy rule group.

```sql
SELECT
ProxyRuleGroup,
UpdateToken
FROM aws.network_firewall.proxy_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_proxy_rule_groups">

Retrieves the metadata for the proxy rule groups that you have defined. Depending on your setting for max results and the number of proxy rule groups, a single call might not return the full list.

```sql
SELECT
Arn,
Name
FROM aws.network_firewall.proxy_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proxy_rule_group"
    values={[
        { label: 'create_proxy_rule_group', value: 'create_proxy_rule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proxy_rule_group">

Creates an Network Firewall ProxyRuleGroup Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations. To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxy rule groups, use ListProxyRuleGroups and DescribeProxyRuleGroup. To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.

```sql
INSERT INTO aws.network_firewall.proxy_rule_groups (
ProxyRuleGroupName,
Description,
Rules,
Tags,
region
)
SELECT 
'{{ ProxyRuleGroupName }}' /* required */,
'{{ Description }}',
'{{ Rules }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ProxyRuleGroup,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proxy_rule_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proxy_rule_groups resource.
    - name: ProxyRuleGroupName
      value: "{{ ProxyRuleGroupName }}"
      description: |
        The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the proxy rule group.
    - name: Rules
      description: |
        Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert).
      value:
        PreDNS:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
        PreREQUEST:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
        PostRESPONSE:
          - ProxyRuleName: "{{ ProxyRuleName }}"
            Description: "{{ Description }}"
            Action: "{{ Action }}"
            Conditions: "{{ Conditions }}"
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_proxy_rule_group_priorities"
    values={[
        { label: 'update_proxy_rule_group_priorities', value: 'update_proxy_rule_group_priorities' }
    ]}
>
<TabItem value="update_proxy_rule_group_priorities">

Updates proxy rule group priorities within a proxy configuration.

```sql
UPDATE aws.network_firewall.proxy_rule_groups
SET 
ProxyConfigurationName = '{{ ProxyConfigurationName }}',
ProxyConfigurationArn = '{{ ProxyConfigurationArn }}',
RuleGroups = '{{ RuleGroups }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND RuleGroups = '{{ RuleGroups }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
ProxyRuleGroups,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_proxy_rule_group"
    values={[
        { label: 'delete_proxy_rule_group', value: 'delete_proxy_rule_group' }
    ]}
>
<TabItem value="delete_proxy_rule_group">

Deletes the specified ProxyRuleGroup.

```sql
DELETE FROM aws.network_firewall.proxy_rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
