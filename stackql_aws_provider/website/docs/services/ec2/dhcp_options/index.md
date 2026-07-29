--- 
title: dhcp_options
hide_title: false
hide_table_of_contents: false
keywords:
  - dhcp_options
  - ec2
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

Creates, updates, deletes, gets or lists a <code>dhcp_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dhcp_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.dhcp_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dhcp_options"
    values={[
        { label: 'describe_dhcp_options', value: 'describe_dhcp_options' }
    ]}
>
<TabItem value="describe_dhcp_options">

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
    <td><CopyableCode code="dhcp_configurations" /></td>
    <td><code>string</code></td>
    <td>The DHCP options in the set.</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_options_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the set of DHCP options.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the DHCP options set.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the DHCP options set.</td>
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
    <td><a href="#describe_dhcp_options"><CopyableCode code="describe_dhcp_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DhcpOptionsId"><code>DhcpOptionsId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your DHCP option sets. The default is to describe all your DHCP option sets. Alternatively, you can specify specific DHCP option set IDs or filter the results to include only the DHCP option sets that match specific criteria. For more information, see DHCP option sets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_dhcp_options"><CopyableCode code="create_dhcp_options" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DhcpConfiguration"><code>DhcpConfiguration</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a custom set of DHCP options. After you create a DHCP option set, you associate it with a VPC. After you associate a DHCP option set with a VPC, all existing and newly launched instances in the VPC use this set of DHCP options. The following are the individual DHCP options you can specify. For more information, see DHCP option sets in the Amazon VPC User Guide. domain-name - If you're using AmazonProvidedDNS in us-east-1, specify ec2.internal. If you're using AmazonProvidedDNS in any other Region, specify region.compute.internal. Otherwise, specify a custom domain name. This value is used to complete unqualified DNS hostnames. Some Linux operating systems accept multiple domain names separated by spaces. However, Windows and other Linux operating systems treat the value as a single domain, which results in unexpected behavior. If your DHCP option set is associated with a VPC that has instances running operating systems that treat the value as a single domain, specify only one domain name. domain-name-servers - The IP addresses of up to four DNS servers, or AmazonProvidedDNS. To specify multiple domain name servers in a single parameter, separate the IP addresses using commas. To have your instances receive custom DNS hostnames as specified in domain-name, you must specify a custom DNS server. ntp-servers - The IP addresses of up to eight Network Time Protocol (NTP) servers (four IPv4 addresses and four IPv6 addresses). netbios-name-servers - The IP addresses of up to four NetBIOS name servers. netbios-node-type - The NetBIOS node type (1, 2, 4, or 8). We recommend that you specify 2. Broadcast and multicast are not supported. For more information about NetBIOS node types, see RFC 2132. ipv6-address-preferred-lease-time - A value (in seconds, minutes, hours, or years) for how frequently a running instance with an IPv6 assigned to it goes through DHCPv6 lease renewal. Acceptable values are between 140 and 2147483647 seconds (approximately 68 years). If no value is entered, the default lease time is 140 seconds. If you use long-term addressing for EC2 instances, you can increase the lease time and avoid frequent lease renewal requests. Lease renewal typically occurs when half of the lease time has elapsed.</td>
</tr>
<tr>
    <td><a href="#associate_dhcp_options"><CopyableCode code="associate_dhcp_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DhcpOptionsId"><code>DhcpOptionsId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC. After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance. For more information, see DHCP option sets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_dhcp_options"><CopyableCode code="delete_dhcp_options" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DhcpOptionsId"><code>DhcpOptionsId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</td>
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
<tr id="parameter-DhcpConfiguration">
    <td><CopyableCode code="DhcpConfiguration" /></td>
    <td><code>array</code></td>
    <td>A DHCP configuration option.</td>
</tr>
<tr id="parameter-DhcpOptionsId">
    <td><CopyableCode code="DhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DHCP options set.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DhcpOptionsId">
    <td><CopyableCode code="DhcpOptionsId" /></td>
    <td><code>array</code></td>
    <td>The IDs of DHCP option sets.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. dhcp-options-id - The ID of a DHCP options set. key - The key for one of the options (for example, domain-name). value - The value for one of the options. owner-id - The ID of the Amazon Web Services account that owns the DHCP options set. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the DHCP option.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dhcp_options"
    values={[
        { label: 'describe_dhcp_options', value: 'describe_dhcp_options' }
    ]}
>
<TabItem value="describe_dhcp_options">

Describes your DHCP option sets. The default is to describe all your DHCP option sets. Alternatively, you can specify specific DHCP option set IDs or filter the results to include only the DHCP option sets that match specific criteria. For more information, see DHCP option sets in the Amazon VPC User Guide.

```sql
SELECT
dhcp_configurations,
dhcp_options_id,
owner_id,
tags
FROM aws.ec2.dhcp_options
WHERE region = '{{ region }}' -- required
AND DhcpOptionsId = '{{ DhcpOptionsId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dhcp_options"
    values={[
        { label: 'create_dhcp_options', value: 'create_dhcp_options' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dhcp_options">

Creates a custom set of DHCP options. After you create a DHCP option set, you associate it with a VPC. After you associate a DHCP option set with a VPC, all existing and newly launched instances in the VPC use this set of DHCP options. The following are the individual DHCP options you can specify. For more information, see DHCP option sets in the Amazon VPC User Guide. domain-name - If you're using AmazonProvidedDNS in us-east-1, specify ec2.internal. If you're using AmazonProvidedDNS in any other Region, specify region.compute.internal. Otherwise, specify a custom domain name. This value is used to complete unqualified DNS hostnames. Some Linux operating systems accept multiple domain names separated by spaces. However, Windows and other Linux operating systems treat the value as a single domain, which results in unexpected behavior. If your DHCP option set is associated with a VPC that has instances running operating systems that treat the value as a single domain, specify only one domain name. domain-name-servers - The IP addresses of up to four DNS servers, or AmazonProvidedDNS. To specify multiple domain name servers in a single parameter, separate the IP addresses using commas. To have your instances receive custom DNS hostnames as specified in domain-name, you must specify a custom DNS server. ntp-servers - The IP addresses of up to eight Network Time Protocol (NTP) servers (four IPv4 addresses and four IPv6 addresses). netbios-name-servers - The IP addresses of up to four NetBIOS name servers. netbios-node-type - The NetBIOS node type (1, 2, 4, or 8). We recommend that you specify 2. Broadcast and multicast are not supported. For more information about NetBIOS node types, see RFC 2132. ipv6-address-preferred-lease-time - A value (in seconds, minutes, hours, or years) for how frequently a running instance with an IPv6 assigned to it goes through DHCPv6 lease renewal. Acceptable values are between 140 and 2147483647 seconds (approximately 68 years). If no value is entered, the default lease time is 140 seconds. If you use long-term addressing for EC2 instances, you can increase the lease time and avoid frequent lease renewal requests. Lease renewal typically occurs when half of the lease time has elapsed.

```sql
INSERT INTO aws.ec2.dhcp_options (
DhcpConfiguration,
region,
TagSpecification,
DryRun
)
SELECT 
'{{ DhcpConfiguration }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
dhcp_configurations,
dhcp_options_id,
owner_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dhcp_options
  props:
    - name: DhcpConfiguration
      value: "{{ DhcpConfiguration }}"
      description: Required parameter for the dhcp_options resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dhcp_options resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the DHCP option.
      description: The tags to assign to the DHCP option.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_dhcp_options"
    values={[
        { label: 'associate_dhcp_options', value: 'associate_dhcp_options' }
    ]}
>
<TabItem value="associate_dhcp_options">

Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC. After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance. For more information, see DHCP option sets in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.dhcp_options
SET 
-- No updatable properties
WHERE 
DhcpOptionsId = '{{ DhcpOptionsId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dhcp_options"
    values={[
        { label: 'delete_dhcp_options', value: 'delete_dhcp_options' }
    ]}
>
<TabItem value="delete_dhcp_options">

Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.

```sql
DELETE FROM aws.ec2.dhcp_options
WHERE DhcpOptionsId = '{{ DhcpOptionsId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
