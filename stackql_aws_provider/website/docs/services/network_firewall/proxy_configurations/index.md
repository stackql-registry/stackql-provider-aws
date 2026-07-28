--- 
title: proxy_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - proxy_configurations
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

Creates, updates, deletes, gets or lists a <code>proxy_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="proxy_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.proxy_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_proxy_configuration"
    values={[
        { label: 'describe_proxy_configuration', value: 'describe_proxy_configuration' },
        { label: 'list_proxy_configurations', value: 'list_proxy_configurations' }
    ]}
>
<TabItem value="describe_proxy_configuration">

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
    <td><CopyableCode code="ProxyConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the specified proxy configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request. To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_proxy_configurations">

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
    <td>The Amazon Resource Name (ARN) of a proxy configuration. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_proxy_configuration"><CopyableCode code="describe_proxy_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified proxy configuration.</td>
</tr>
<tr>
    <td><a href="#list_proxy_configurations"><CopyableCode code="list_proxy_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the proxy configuration that you have defined. Depending on your setting for max results and the number of proxy configurations, a single call might not return the full list.</td>
</tr>
<tr>
    <td><a href="#create_proxy_configuration"><CopyableCode code="create_proxy_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProxyConfigurationName"><code>ProxyConfigurationName</code></a>, <a href="#parameter-DefaultRulePhaseActions"><code>DefaultRulePhaseActions</code></a></td>
    <td></td>
    <td>Creates an Network Firewall ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration. To manage a proxy configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxyConfigurations and DescribeProxyConfiguration.</td>
</tr>
<tr>
    <td><a href="#attach_rule_groups_to_proxy_configuration"><CopyableCode code="attach_rule_groups_to_proxy_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleGroups"><code>RuleGroups</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Attaches ProxyRuleGroup resources to a ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.</td>
</tr>
<tr>
    <td><a href="#update_proxy_configuration"><CopyableCode code="update_proxy_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultRulePhaseActions"><code>DefaultRulePhaseActions</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the properties of the specified proxy configuration.</td>
</tr>
<tr>
    <td><a href="#detach_rule_groups_from_proxy_configuration"><CopyableCode code="detach_rule_groups_from_proxy_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Detaches ProxyRuleGroup resources from a ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.</td>
</tr>
<tr>
    <td><a href="#delete_proxy_configuration"><CopyableCode code="delete_proxy_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ProxyConfiguration.</td>
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
    defaultValue="describe_proxy_configuration"
    values={[
        { label: 'describe_proxy_configuration', value: 'describe_proxy_configuration' },
        { label: 'list_proxy_configurations', value: 'list_proxy_configurations' }
    ]}
>
<TabItem value="describe_proxy_configuration">

Returns the data objects for the specified proxy configuration.

```sql
SELECT
ProxyConfiguration,
UpdateToken
FROM aws.network_firewall.proxy_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_proxy_configurations">

Retrieves the metadata for the proxy configuration that you have defined. Depending on your setting for max results and the number of proxy configurations, a single call might not return the full list.

```sql
SELECT
Arn,
Name
FROM aws.network_firewall.proxy_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_proxy_configuration"
    values={[
        { label: 'create_proxy_configuration', value: 'create_proxy_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_proxy_configuration">

Creates an Network Firewall ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration. To manage a proxy configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxyConfigurations and DescribeProxyConfiguration.

```sql
INSERT INTO aws.network_firewall.proxy_configurations (
ProxyConfigurationName,
Description,
RuleGroupNames,
RuleGroupArns,
DefaultRulePhaseActions,
Tags,
region
)
SELECT 
'{{ ProxyConfigurationName }}' /* required */,
'{{ Description }}',
'{{ RuleGroupNames }}',
'{{ RuleGroupArns }}',
'{{ DefaultRulePhaseActions }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ProxyConfiguration,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: proxy_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the proxy_configurations resource.
    - name: ProxyConfigurationName
      value: "{{ ProxyConfigurationName }}"
      description: |
        The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the proxy configuration.
    - name: RuleGroupNames
      value:
        - "{{ RuleGroupNames }}"
      description: |
        The proxy rule group name(s) to attach to the proxy configuration. You must specify the ARNs or the names, and you can specify both.
    - name: RuleGroupArns
      value:
        - "{{ RuleGroupArns }}"
      description: |
        The proxy rule group arn(s) to attach to the proxy configuration. You must specify the ARNs or the names, and you can specify both.
    - name: DefaultRulePhaseActions
      description: |
        Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied.
      value:
        PreDNS: "{{ PreDNS }}"
        PreREQUEST: "{{ PreREQUEST }}"
        PostRESPONSE: "{{ PostRESPONSE }}"
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
    defaultValue="attach_rule_groups_to_proxy_configuration"
    values={[
        { label: 'attach_rule_groups_to_proxy_configuration', value: 'attach_rule_groups_to_proxy_configuration' },
        { label: 'update_proxy_configuration', value: 'update_proxy_configuration' },
        { label: 'detach_rule_groups_from_proxy_configuration', value: 'detach_rule_groups_from_proxy_configuration' }
    ]}
>
<TabItem value="attach_rule_groups_to_proxy_configuration">

Attaches ProxyRuleGroup resources to a ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.

```sql
UPDATE aws.network_firewall.proxy_configurations
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
ProxyConfiguration,
UpdateToken;
```
</TabItem>
<TabItem value="update_proxy_configuration">

Updates the properties of the specified proxy configuration.

```sql
UPDATE aws.network_firewall.proxy_configurations
SET 
ProxyConfigurationName = '{{ ProxyConfigurationName }}',
ProxyConfigurationArn = '{{ ProxyConfigurationArn }}',
DefaultRulePhaseActions = '{{ DefaultRulePhaseActions }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND DefaultRulePhaseActions = '{{ DefaultRulePhaseActions }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
ProxyConfiguration,
UpdateToken;
```
</TabItem>
<TabItem value="detach_rule_groups_from_proxy_configuration">

Detaches ProxyRuleGroup resources from a ProxyConfiguration A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.

```sql
UPDATE aws.network_firewall.proxy_configurations
SET 
ProxyConfigurationName = '{{ ProxyConfigurationName }}',
ProxyConfigurationArn = '{{ ProxyConfigurationArn }}',
RuleGroupNames = '{{ RuleGroupNames }}',
RuleGroupArns = '{{ RuleGroupArns }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
ProxyConfiguration,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_proxy_configuration"
    values={[
        { label: 'delete_proxy_configuration', value: 'delete_proxy_configuration' }
    ]}
>
<TabItem value="delete_proxy_configuration">

Deletes the specified ProxyConfiguration.

```sql
DELETE FROM aws.network_firewall.proxy_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
