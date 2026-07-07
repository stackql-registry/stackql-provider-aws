--- 
title: firewall_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_policies
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

Creates, updates, deletes, gets or lists a <code>firewall_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.firewall_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_firewall_policy"
    values={[
        { label: 'describe_firewall_policy', value: 'describe_firewall_policy' }
    ]}
>
<TabItem value="describe_firewall_policy">

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
    <td><CopyableCode code="FirewallPolicy" /></td>
    <td><code>object</code></td>
    <td>The policy for the specified firewall policy.</td>
</tr>
<tr>
    <td><CopyableCode code="FirewallPolicyResponse" /></td>
    <td><code>object</code></td>
    <td>The high-level properties of a firewall policy. This, along with the FirewallPolicy, define the policy. You can retrieve all objects for a firewall policy by calling DescribeFirewallPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateToken" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request. To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_firewall_policy"><CopyableCode code="describe_firewall_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified firewall policy.</td>
</tr>
<tr>
    <td><a href="#create_firewall_policy"><CopyableCode code="create_firewall_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallPolicyName"><code>FirewallPolicyName</code></a>, <a href="#parameter-FirewallPolicy"><code>FirewallPolicy</code></a></td>
    <td></td>
    <td>Creates the firewall policy for the firewall according to the specifications. An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls.</td>
</tr>
<tr>
    <td><a href="#update_firewall_policy"><CopyableCode code="update_firewall_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a>, <a href="#parameter-FirewallPolicy"><code>FirewallPolicy</code></a></td>
    <td></td>
    <td>Updates the properties of the specified firewall policy.</td>
</tr>
<tr>
    <td><a href="#associate_firewall_policy"><CopyableCode code="associate_firewall_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallPolicyArn"><code>FirewallPolicyArn</code></a></td>
    <td></td>
    <td>Associates a FirewallPolicy to a Firewall. A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.</td>
</tr>
<tr>
    <td><a href="#update_firewall_policy_change_protection"><CopyableCode code="update_firewall_policy_change_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallPolicyChangeProtection"><code>FirewallPolicyChangeProtection</code></a></td>
    <td></td>
    <td>Modifies the flag, ChangeProtection, which indicates whether it is possible to change the firewall. If the flag is set to TRUE, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_policy"><CopyableCode code="delete_firewall_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified FirewallPolicy.</td>
</tr>
<tr>
    <td><a href="#list_firewall_policies"><CopyableCode code="list_firewall_policies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.</td>
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
    defaultValue="describe_firewall_policy"
    values={[
        { label: 'describe_firewall_policy', value: 'describe_firewall_policy' }
    ]}
>
<TabItem value="describe_firewall_policy">

Returns the data objects for the specified firewall policy.

```sql
SELECT
FirewallPolicy,
FirewallPolicyResponse,
UpdateToken
FROM aws.network_firewall.firewall_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_policy"
    values={[
        { label: 'create_firewall_policy', value: 'create_firewall_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_policy">

Creates the firewall policy for the firewall according to the specifications. An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls.

```sql
INSERT INTO aws.network_firewall.firewall_policies (
FirewallPolicyName,
FirewallPolicy,
Description,
Tags,
DryRun,
EncryptionConfiguration,
region
)
SELECT 
'{{ FirewallPolicyName }}' /* required */,
'{{ FirewallPolicy }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
{{ DryRun }},
'{{ EncryptionConfiguration }}',
'{{ region }}'
RETURNING
FirewallPolicyResponse,
UpdateToken
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_policies resource.
    - name: FirewallPolicyName
      value: "{{ FirewallPolicyName }}"
      description: |
        The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
    - name: FirewallPolicy
      description: |
        The rule groups and policy actions to use in the firewall policy.
      value:
        StatelessRuleGroupReferences:
          - ResourceArn: "{{ ResourceArn }}"
            Priority: {{ Priority }}
        StatelessDefaultActions:
          - "{{ StatelessDefaultActions }}"
        StatelessFragmentDefaultActions:
          - "{{ StatelessFragmentDefaultActions }}"
        StatelessCustomActions:
          - ActionName: "{{ ActionName }}"
            ActionDefinition:
              PublishMetricAction:
                Dimensions:
                  - Value: "{{ Value }}"
        StatefulRuleGroupReferences:
          - ResourceArn: "{{ ResourceArn }}"
            Priority: {{ Priority }}
            Override:
              Action: "{{ Action }}"
            DeepThreatInspection: {{ DeepThreatInspection }}
        StatefulDefaultActions:
          - "{{ StatefulDefaultActions }}"
        StatefulEngineOptions:
          RuleOrder: "{{ RuleOrder }}"
          StreamExceptionPolicy: "{{ StreamExceptionPolicy }}"
          FlowTimeouts:
            TcpIdleTimeoutSeconds: {{ TcpIdleTimeoutSeconds }}
        TLSInspectionConfigurationArn: "{{ TLSInspectionConfigurationArn }}"
        PolicyVariables:
          RuleVariables: "{{ RuleVariables }}"
        EnableTLSSessionHolding: {{ EnableTLSSessionHolding }}
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the firewall policy.
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
        A complex type that contains settings for encryption of your firewall policy resources.
      value:
        KeyId: "{{ KeyId }}"
        Type: "{{ Type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_policy"
    values={[
        { label: 'update_firewall_policy', value: 'update_firewall_policy' },
        { label: 'associate_firewall_policy', value: 'associate_firewall_policy' },
        { label: 'update_firewall_policy_change_protection', value: 'update_firewall_policy_change_protection' }
    ]}
>
<TabItem value="update_firewall_policy">

Updates the properties of the specified firewall policy.

```sql
UPDATE aws.network_firewall.firewall_policies
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallPolicyArn = '{{ FirewallPolicyArn }}',
FirewallPolicyName = '{{ FirewallPolicyName }}',
FirewallPolicy = '{{ FirewallPolicy }}',
Description = '{{ Description }}',
DryRun = {{ DryRun }},
EncryptionConfiguration = '{{ EncryptionConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
AND FirewallPolicy = '{{ FirewallPolicy }}' --required
RETURNING
FirewallPolicyResponse,
UpdateToken;
```
</TabItem>
<TabItem value="associate_firewall_policy">

Associates a FirewallPolicy to a Firewall. A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.

```sql
UPDATE aws.network_firewall.firewall_policies
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
FirewallPolicyArn = '{{ FirewallPolicyArn }}'
WHERE 
region = '{{ region }}' --required
AND FirewallPolicyArn = '{{ FirewallPolicyArn }}' --required
RETURNING
FirewallArn,
FirewallName,
FirewallPolicyArn,
UpdateToken;
```
</TabItem>
<TabItem value="update_firewall_policy_change_protection">

Modifies the flag, ChangeProtection, which indicates whether it is possible to change the firewall. If the flag is set to TRUE, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.

```sql
UPDATE aws.network_firewall.firewall_policies
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
FirewallPolicyChangeProtection = {{ FirewallPolicyChangeProtection }}
WHERE 
region = '{{ region }}' --required
AND FirewallPolicyChangeProtection = {{ FirewallPolicyChangeProtection }} --required
RETURNING
FirewallArn,
FirewallName,
FirewallPolicyChangeProtection,
UpdateToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_policy"
    values={[
        { label: 'delete_firewall_policy', value: 'delete_firewall_policy' }
    ]}
>
<TabItem value="delete_firewall_policy">

Deletes the specified FirewallPolicy.

```sql
DELETE FROM aws.network_firewall.firewall_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_firewall_policies"
    values={[
        { label: 'list_firewall_policies', value: 'list_firewall_policies' }
    ]}
>
<TabItem value="list_firewall_policies">

Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.

```sql
EXEC aws.network_firewall.firewall_policies.list_firewall_policies 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
