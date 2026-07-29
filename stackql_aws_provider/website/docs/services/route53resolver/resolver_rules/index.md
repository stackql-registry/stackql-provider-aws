--- 
title: resolver_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_rules
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>resolver_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_rule"
    values={[
        { label: 'get_resolver_rule', value: 'get_resolver_rule' },
        { label: 'list_resolver_rules', value: 'list_resolver_rules' }
    ]}
>
<TabItem value="get_resolver_rule">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Resolver rule specified by Id.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that you specified when you created the Resolver rule. CreatorRequestId identifies the request and allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_record" /></td>
    <td><code>string</code></td>
    <td>DNS queries with delegation records that point to this domain name are forwarded to resolvers on your network.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that Resolver assigned to the Resolver rule when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the Resolver rule, which you specified when you created the Resolver rule. The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint that the rule is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD or DELEGATE. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com). When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType. (FORWARD, SYSTEM, RECURSIVE, DELEGATE)</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Whether the rule is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account. (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the Resolver rule. (COMPLETE, DELETING, UPDATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of a Resolver rule.</td>
</tr>
<tr>
    <td><CopyableCode code="target_ips" /></td>
    <td><code>array</code></td>
    <td>An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_rules">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Resolver rule specified by Id.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that you specified when you created the Resolver rule. CreatorRequestId identifies the request and allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_record" /></td>
    <td><code>string</code></td>
    <td>DNS queries with delegation records that point to this domain name are forwarded to resolvers on your network.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that Resolver assigned to the Resolver rule when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the Resolver rule, which you specified when you created the Resolver rule. The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>When a rule is shared with another Amazon Web Services account, the account ID of the account that the rule is shared with.</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint that the rule is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD or DELEGATE. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com). When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType. (FORWARD, SYSTEM, RECURSIVE, DELEGATE)</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Whether the rule is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account. (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the Resolver rule. (COMPLETE, DELETING, UPDATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of a Resolver rule.</td>
</tr>
<tr>
    <td><CopyableCode code="target_ips" /></td>
    <td><code>array</code></td>
    <td>An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network.</td>
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
    <td><a href="#get_resolver_rule"><CopyableCode code="get_resolver_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.</td>
</tr>
<tr>
    <td><a href="#list_resolver_rules"><CopyableCode code="list_resolver_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Resolver rules that were created using the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_resolver_rule"><CopyableCode code="create_resolver_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a>, <a href="#parameter-RuleType"><code>RuleType</code></a></td>
    <td></td>
    <td>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</td>
</tr>
<tr>
    <td><a href="#associate_resolver_rule"><CopyableCode code="associate_resolver_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverRuleId"><code>ResolverRuleId</code></a>, <a href="#parameter-VPCId"><code>VPCId</code></a></td>
    <td></td>
    <td>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule.</td>
</tr>
<tr>
    <td><a href="#update_resolver_rule"><CopyableCode code="update_resolver_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverRuleId"><code>ResolverRuleId</code></a>, <a href="#parameter-Config"><code>Config</code></a></td>
    <td></td>
    <td>Updates settings for a specified Resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.</td>
</tr>
<tr>
    <td><a href="#delete_resolver_rule"><CopyableCode code="delete_resolver_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see DisassociateResolverRule.</td>
</tr>
<tr>
    <td><a href="#disassociate_resolver_rule"><CopyableCode code="disassociate_resolver_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VPCId"><code>VPCId</code></a>, <a href="#parameter-ResolverRuleId"><code>ResolverRuleId</code></a></td>
    <td></td>
    <td>Removes the association between a specified Resolver rule and a specified VPC. If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule.</td>
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
    defaultValue="get_resolver_rule"
    values={[
        { label: 'get_resolver_rule', value: 'get_resolver_rule' },
        { label: 'list_resolver_rules', value: 'list_resolver_rules' }
    ]}
>
<TabItem value="get_resolver_rule">

Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.

```sql
SELECT
arn,
creation_time,
creator_request_id,
delegation_record,
domain_name,
id,
modification_time,
name,
owner_id,
resolver_endpoint_id,
rule_type,
share_status,
status,
status_message,
target_ips
FROM aws.route53resolver.resolver_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_rules">

Lists the Resolver rules that were created using the current Amazon Web Services account.

```sql
SELECT
arn,
creation_time,
creator_request_id,
delegation_record,
domain_name,
id,
modification_time,
name,
owner_id,
resolver_endpoint_id,
rule_type,
share_status,
status,
status_message,
target_ips
FROM aws.route53resolver.resolver_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resolver_rule"
    values={[
        { label: 'create_resolver_rule', value: 'create_resolver_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resolver_rule">

For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.

```sql
INSERT INTO aws.route53resolver.resolver_rules (
CreatorRequestId,
Name,
RuleType,
DomainName,
TargetIps,
ResolverEndpointId,
Tags,
DelegationRecord,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ Name }}',
'{{ RuleType }}' /* required */,
'{{ DomainName }}',
'{{ TargetIps }}',
'{{ ResolverEndpointId }}',
'{{ Tags }}',
'{{ DelegationRecord }}',
'{{ region }}'
RETURNING
resolver_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resolver_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resolver_rules resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console. The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
    - name: RuleType
      value: "{{ RuleType }}"
      description: |
        When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD or DELEGATE. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType.
      valid_values: ['FORWARD', 'SYSTEM', 'RECURSIVE', 'DELEGATE']
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        DNS queries for this domain name are forwarded to the IP addresses that you specify in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).
    - name: TargetIps
      description: |
        The IPs that you want Resolver to forward DNS queries to. You can specify either Ipv4 or Ipv6 addresses but not both in the same rule. Separate IP addresses with a space. TargetIps is available only when the value of Rule type is FORWARD. You should not provide TargetIps when the Rule type is DELEGATE. when creating a DELEGATE rule, you must not provide the TargetIps parameter. If you provide the TargetIps, you may receive an ERROR message similar to "Delegate resolver rules need to specify a nameserver name". This error means you should not provide TargetIps.
      value:
        - Ip: "{{ Ip }}"
          Port: {{ Port }}
          Ipv6: "{{ Ipv6 }}"
          Protocol: "{{ Protocol }}"
          ServerNameIndication: "{{ ServerNameIndication }}"
    - name: ResolverEndpointId
      value: "{{ ResolverEndpointId }}"
      description: |
        The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
    - name: Tags
      description: |
        A list of the tag keys and values that you want to associate with the endpoint.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DelegationRecord
      value: "{{ DelegationRecord }}"
      description: |
        DNS queries with the delegation records that match this domain name are forwarded to the resolvers on your network.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resolver_rule"
    values={[
        { label: 'associate_resolver_rule', value: 'associate_resolver_rule' },
        { label: 'update_resolver_rule', value: 'update_resolver_rule' }
    ]}
>
<TabItem value="associate_resolver_rule">

Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule.

```sql
UPDATE aws.route53resolver.resolver_rules
SET 
ResolverRuleId = '{{ ResolverRuleId }}',
Name = '{{ Name }}',
VPCId = '{{ VPCId }}'
WHERE 
region = '{{ region }}' --required
AND ResolverRuleId = '{{ ResolverRuleId }}' --required
AND VPCId = '{{ VPCId }}' --required
RETURNING
resolver_rule_association;
```
</TabItem>
<TabItem value="update_resolver_rule">

Updates settings for a specified Resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

```sql
UPDATE aws.route53resolver.resolver_rules
SET 
ResolverRuleId = '{{ ResolverRuleId }}',
Config = '{{ Config }}'
WHERE 
region = '{{ region }}' --required
AND ResolverRuleId = '{{ ResolverRuleId }}' --required
AND Config = '{{ Config }}' --required
RETURNING
resolver_rule;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resolver_rule"
    values={[
        { label: 'delete_resolver_rule', value: 'delete_resolver_rule' }
    ]}
>
<TabItem value="delete_resolver_rule">

Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see DisassociateResolverRule.

```sql
DELETE FROM aws.route53resolver.resolver_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resolver_rule"
    values={[
        { label: 'disassociate_resolver_rule', value: 'disassociate_resolver_rule' }
    ]}
>
<TabItem value="disassociate_resolver_rule">

Removes the association between a specified Resolver rule and a specified VPC. If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule.

```sql
EXEC aws.route53resolver.resolver_rules.disassociate_resolver_rule 
@region='{{ region }}' --required 
@@json=
'{
"VPCId": "{{ VPCId }}", 
"ResolverRuleId": "{{ ResolverRuleId }}"
}'
;
```
</TabItem>
</Tabs>
