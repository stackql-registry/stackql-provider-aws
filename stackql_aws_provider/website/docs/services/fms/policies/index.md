--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - fms
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>Information about the specified Firewall Manager policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td><CopyableCode code="delete_unused_fm_managed_resources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope. By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. This option is not available for Shield Advanced or WAF Classic policies.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the specified policy. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the specified policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the policy is in or out of an admin's policy or Region scope. ACTIVE - The administrator can manage and delete the policy. OUT_OF_ADMIN_SCOPE - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected. (ACTIVE, OUT_OF_ADMIN_SCOPE)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the policy should be automatically applied to new resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource protected by or in scope of the policy. This is in the format shown in the Amazon Web Services Resource Types Reference. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_service_type" /></td>
    <td><code>string</code></td>
    <td>The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an WAF policy, a Shield Advanced policy, or a security group policy. (WAF, WAFV2, SHIELD_ADVANCED, SECURITY_GROUPS_COMMON, SECURITY_GROUPS_CONTENT_AUDIT, SECURITY_GROUPS_USAGE_AUDIT, NETWORK_FIREWALL, DNS_FIREWALL, THIRD_PARTY_FIREWALL, IMPORT_NETWORK_FIREWALL, NETWORK_ACL_COMMON)</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Firewall Manager policy.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of PolicySummary objects.</td>
</tr>
<tr>
    <td><a href="#put_policy"><CopyableCode code="put_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Firewall Manager policy. A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple policy types across accounts, you can create multiple policies. You can create more than one policy for each type. If you add a new account to an organization that you created with Organizations, Firewall Manager automatically applies the policy to the resources in that account that are within scope of the policy. Firewall Manager provides the following types of policies: WAF policy - This policy applies WAF web ACL protections to specified accounts and resources. Shield Advanced policy - This policy applies Shield Advanced protection to specified accounts and resources. Security Groups policy - This type of policy gives you control over security groups that are in use throughout your organization in Organizations and lets you enforce a baseline set of rules across your organization. Network ACL policy - This type of policy gives you control over the network ACLs that are in use throughout your organization in Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization. Network Firewall policy - This policy applies Network Firewall protection to your organization's VPCs. DNS Firewall policy - This policy applies Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs. Third-party firewall policy - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the Amazon Web Services Marketplace console at Amazon Web Services Marketplace. Palo Alto Networks Cloud NGFW policy - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs. Fortigate CNF policy - This policy applies Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes an Firewall Manager policy.</td>
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
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Returns information about the specified Firewall Manager policy.

```sql
SELECT
policy,
policy_arn
FROM aws.fms.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Returns an array of PolicySummary objects.

```sql
SELECT
delete_unused_fm_managed_resources,
policy_arn,
policy_id,
policy_name,
policy_status,
remediation_enabled,
resource_type,
security_service_type
FROM aws.fms.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_policy"
    values={[
        { label: 'put_policy', value: 'put_policy' }
    ]}
>
<TabItem value="put_policy">

Creates an Firewall Manager policy. A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple policy types across accounts, you can create multiple policies. You can create more than one policy for each type. If you add a new account to an organization that you created with Organizations, Firewall Manager automatically applies the policy to the resources in that account that are within scope of the policy. Firewall Manager provides the following types of policies: WAF policy - This policy applies WAF web ACL protections to specified accounts and resources. Shield Advanced policy - This policy applies Shield Advanced protection to specified accounts and resources. Security Groups policy - This type of policy gives you control over security groups that are in use throughout your organization in Organizations and lets you enforce a baseline set of rules across your organization. Network ACL policy - This type of policy gives you control over the network ACLs that are in use throughout your organization in Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization. Network Firewall policy - This policy applies Network Firewall protection to your organization's VPCs. DNS Firewall policy - This policy applies Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs. Third-party firewall policy - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the Amazon Web Services Marketplace console at Amazon Web Services Marketplace. Palo Alto Networks Cloud NGFW policy - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs. Fortigate CNF policy - This policy applies Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.

```sql
REPLACE aws.fms.policies
SET 
Policy = '{{ Policy }}',
TagList = '{{ TagList }}'
WHERE 
region = '{{ region }}' --required
RETURNING
policy,
policy_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Permanently deletes an Firewall Manager policy.

```sql
DELETE FROM aws.fms.policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
