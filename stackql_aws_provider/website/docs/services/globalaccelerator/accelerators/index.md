--- 
title: accelerators
hide_title: false
hide_table_of_contents: false
keywords:
  - accelerators
  - globalaccelerator
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

Creates, updates, deletes, gets or lists an <code>accelerators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accelerators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.accelerators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_accelerator"
    values={[
        { label: 'describe_accelerator', value: 'describe_accelerator' },
        { label: 'list_accelerators', value: 'list_accelerators' }
    ]}
>
<TabItem value="describe_accelerator">

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
    <td><CopyableCode code="AcceleratorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the accelerator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DnsName" /></td>
    <td><code>string</code></td>
    <td>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses. The naming convention for the DNS name for an accelerator is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com. If you have a dual-stack accelerator, you also have a second DNS name, DualStackDnsName, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses. For more information about the default DNS name, see Support for DNS addressing in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="DualStackDnsName" /></td>
    <td><code>string</code></td>
    <td>The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses: two IPv4 addresses and two IPv6 addresses. The naming convention for the dual-stack DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example: a1234567890abcdef.dualstack.awsglobalaccelerator.com. Note: Global Accelerator also assigns a default DNS name, DnsName, to your accelerator that points just to the static IPv4 addresses. For more information, see Support for DNS addressing in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="Events" /></td>
    <td><code>array</code></td>
    <td>A history of changes that you make to an accelerator in Global Accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK. (IPV4, DUAL_STACK)</td>
</tr>
<tr>
    <td><CopyableCode code="IpSets" /></td>
    <td><code>array</code></td>
    <td>The static IP addresses that Global Accelerator associates with the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the accelerator was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Describes the deployment status of the accelerator. (DEPLOYED, IN_PROGRESS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_accelerators">

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
    <td><CopyableCode code="AcceleratorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the accelerator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DnsName" /></td>
    <td><code>string</code></td>
    <td>The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses. The naming convention for the DNS name for an accelerator is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .awsglobalaccelerator.com. For example: a1234567890abcdef.awsglobalaccelerator.com. If you have a dual-stack accelerator, you also have a second DNS name, DualStackDnsName, that points to both the A record and the AAAA record for all four static addresses for the accelerator: two IPv4 addresses and two IPv6 addresses. For more information about the default DNS name, see Support for DNS addressing in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="DualStackDnsName" /></td>
    <td><code>string</code></td>
    <td>The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses: two IPv4 addresses and two IPv6 addresses. The naming convention for the dual-stack DNS name is the following: A lowercase letter a, followed by a 16-bit random hex string, followed by .dualstack.awsglobalaccelerator.com. For example: a1234567890abcdef.dualstack.awsglobalaccelerator.com. Note: Global Accelerator also assigns a default DNS name, DnsName, to your accelerator that points just to the static IPv4 addresses. For more information, see Support for DNS addressing in Global Accelerator in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the accelerator is enabled. The value is true or false. The default value is true. If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="Events" /></td>
    <td><code>array</code></td>
    <td>A history of changes that you make to an accelerator in Global Accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK. (IPV4, DUAL_STACK)</td>
</tr>
<tr>
    <td><CopyableCode code="IpSets" /></td>
    <td><code>array</code></td>
    <td>The static IP addresses that Global Accelerator associates with the accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the accelerator was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Describes the deployment status of the accelerator. (DEPLOYED, IN_PROGRESS)</td>
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
    <td><a href="#describe_accelerator"><CopyableCode code="describe_accelerator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe an accelerator.</td>
</tr>
<tr>
    <td><a href="#list_accelerators"><CopyableCode code="list_accelerators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the accelerators for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_accelerator"><CopyableCode code="create_accelerator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify --region us-west-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_accelerator"><CopyableCode code="update_accelerator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcceleratorArn"><code>AcceleratorArn</code></a></td>
    <td></td>
    <td>Update an accelerator to make changes, such as the following: Change the name of the accelerator. Disable the accelerator so that it no longer accepts or routes traffic, or so that you can delete it. Enable the accelerator, if it is disabled. Change the IP address type to dual-stack if it is IPv4, or change the IP address type to IPv4 if it's dual-stack. Be aware that static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete the accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify --region us-west-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_accelerator"><CopyableCode code="delete_accelerator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set Enabled to false. When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see Identity and access management in the Global Accelerator Developer Guide.</td>
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
    defaultValue="describe_accelerator"
    values={[
        { label: 'describe_accelerator', value: 'describe_accelerator' },
        { label: 'list_accelerators', value: 'list_accelerators' }
    ]}
>
<TabItem value="describe_accelerator">

Describe an accelerator.

```sql
SELECT
AcceleratorArn,
CreatedTime,
DnsName,
DualStackDnsName,
Enabled,
Events,
IpAddressType,
IpSets,
LastModifiedTime,
Name,
Status
FROM aws.globalaccelerator.accelerators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_accelerators">

List the accelerators for an Amazon Web Services account.

```sql
SELECT
AcceleratorArn,
CreatedTime,
DnsName,
DualStackDnsName,
Enabled,
Events,
IpAddressType,
IpSets,
LastModifiedTime,
Name,
Status
FROM aws.globalaccelerator.accelerators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_accelerator"
    values={[
        { label: 'create_accelerator', value: 'create_accelerator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_accelerator">

Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify --region us-west-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.globalaccelerator.accelerators (
Name,
IpAddressType,
IpAddresses,
Enabled,
IdempotencyToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ IpAddressType }}',
'{{ IpAddresses }}',
{{ Enabled }},
'{{ IdempotencyToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Accelerator
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accelerators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accelerators resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the accelerator. The name can have a maximum of 64 characters, must contain only alphanumeric characters, periods (.), or hyphens (-), and must not begin or end with a hyphen or period.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.
      valid_values: ['IPV4', 'DUAL_STACK']
    - name: IpAddresses
      value:
        - "{{ IpAddresses }}"
      description: |
        Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose an IPv4 address from your own pool to use for the accelerator's static IPv4 address when you create an accelerator. After you bring an address range to Amazon Web Services, it appears in your account as an address pool. When you create an accelerator, you can assign one IPv4 address from your range to it. Global Accelerator assigns you a second static IPv4 address from an Amazon IP address range. If you bring two IPv4 address ranges to Amazon Web Services, you can assign one IPv4 address from each range to your accelerator. This restriction is because Global Accelerator assigns each address range to a different network zone, for high availability. You can specify one or two addresses, separated by a space. Do not include the /32 suffix. Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.
    - name: Enabled
      value: {{ Enabled }}
      description: |
        Indicates whether an accelerator is enabled. The value is true or false. The default value is true. If the value is set to true, an accelerator cannot be deleted. If set to false, the accelerator can be deleted.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of an accelerator.
    - name: Tags
      description: |
        Create tags for an accelerator. For more information, see Tagging in Global Accelerator in the Global Accelerator Developer Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_accelerator"
    values={[
        { label: 'update_accelerator', value: 'update_accelerator' }
    ]}
>
<TabItem value="update_accelerator">

Update an accelerator to make changes, such as the following: Change the name of the accelerator. Disable the accelerator so that it no longer accepts or routes traffic, or so that you can delete it. Enable the accelerator, if it is disabled. Change the IP address type to dual-stack if it is IPv4, or change the IP address type to IPv4 if it's dual-stack. Be aware that static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete the accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify --region us-west-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.globalaccelerator.accelerators
SET 
AcceleratorArn = '{{ AcceleratorArn }}',
Name = '{{ Name }}',
IpAddressType = '{{ IpAddressType }}',
IpAddresses = '{{ IpAddresses }}',
Enabled = {{ Enabled }}
WHERE 
region = '{{ region }}' --required
AND AcceleratorArn = '{{ AcceleratorArn }}' --required
RETURNING
Accelerator;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_accelerator"
    values={[
        { label: 'delete_accelerator', value: 'delete_accelerator' }
    ]}
>
<TabItem value="delete_accelerator">

Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set Enabled to false. When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you delete an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see Identity and access management in the Global Accelerator Developer Guide.

```sql
DELETE FROM aws.globalaccelerator.accelerators
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
