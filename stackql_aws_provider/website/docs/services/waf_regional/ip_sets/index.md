--- 
title: ip_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sets
  - waf_regional
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

Creates, updates, deletes, gets or lists an <code>ip_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.ip_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ip_set"
    values={[
        { label: 'get_ip_set', value: 'get_ip_set' },
        { label: 'list_ip_sets', value: 'list_ip_sets' }
    ]}
>
<TabItem value="get_ip_set">

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
    <td><CopyableCode code="ip_set_descriptors" /></td>
    <td><code>array</code></td>
    <td>The IP address type (IPV4 or IPV6) and the IP address range (in CIDR notation) that web requests originate from. If the WebACL is associated with a CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_set_id" /></td>
    <td><code>string</code></td>
    <td>The IPSetId for an IPSet. You use IPSetId to get information about an IPSet (see GetIPSet), update an IPSet (see UpdateIPSet), insert an IPSet into a Rule or delete one from a Rule (see UpdateRule), and delete an IPSet from AWS WAF (see DeleteIPSet). IPSetId is returned by CreateIPSet and by ListIPSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the IPSet. You can't change the name of an IPSet after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ip_sets">

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
    <td><CopyableCode code="ip_sets" /></td>
    <td><code>array</code></td>
    <td>An array of IPSetSummary objects.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>To list more IPSet objects, submit another ListIPSets request, and in the next request use the NextMarker response value as the NextMarker value. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_ip_set"><CopyableCode code="get_ip_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the IPSet that is specified by IPSetId.</td>
</tr>
<tr>
    <td><a href="#list_ip_sets"><CopyableCode code="list_ip_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of IPSetSummary objects in the response.</td>
</tr>
<tr>
    <td><a href="#create_ip_set"><CopyableCode code="create_ip_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an IPSet, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an IPSet that contains those IP addresses and then configure AWS WAF to block the requests. To create and configure an IPSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateIPSet request. Submit a CreateIPSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateIPSet request to specify the IP addresses that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_ip_set"><CopyableCode code="update_ip_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IPSetId"><code>IPSetId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes IPSetDescriptor objects in an IPSet. For each IPSetDescriptor object, you specify the following values: Whether to insert or delete the object from the array. If you want to change an IPSetDescriptor object, you delete the existing object and add a new one. The IP address version, IPv4 or IPv6. The IP address in CIDR notation, for example, 192.0.2.0/24 (for the range of IP addresses from 192.0.2.0 to 192.0.2.255) or 192.0.2.44/32 (for the individual IP address 192.0.2.44). AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. IPv6 addresses can be represented using any of the following formats: 1111:0000:0000:0000:0000:0000:0000:0111/128 1111:0:0:0:0:0:0:0111/128 1111::0111/128 1111::111/128 You use an IPSet to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an IPSet that specifies those IP addresses, and then configure AWS WAF to block the requests. To create and configure an IPSet, perform the following steps: Submit a CreateIPSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateIPSet request to specify the IP addresses that you want AWS WAF to watch for. When you update an IPSet, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one. You can insert a maximum of 1000 addresses in a single request. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_ip_set"><CopyableCode code="delete_ip_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an IPSet. You can't delete an IPSet if it's still used in any Rules or if it still includes any IP addresses. If you just want to remove an IPSet from a Rule, use UpdateRule. To permanently delete an IPSet from AWS WAF, perform the following steps: Update the IPSet to remove IP address ranges, if any. For more information, see UpdateIPSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteIPSet request. Submit a DeleteIPSet request.</td>
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
    defaultValue="get_ip_set"
    values={[
        { label: 'get_ip_set', value: 'get_ip_set' },
        { label: 'list_ip_sets', value: 'list_ip_sets' }
    ]}
>
<TabItem value="get_ip_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the IPSet that is specified by IPSetId.

```sql
SELECT
ip_set_descriptors,
ip_set_id,
name
FROM aws.waf_regional.ip_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ip_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of IPSetSummary objects in the response.

```sql
SELECT
ip_sets,
next_marker
FROM aws.waf_regional.ip_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ip_set"
    values={[
        { label: 'create_ip_set', value: 'create_ip_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ip_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an IPSet, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an IPSet that contains those IP addresses and then configure AWS WAF to block the requests. To create and configure an IPSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateIPSet request. Submit a CreateIPSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateIPSet request to specify the IP addresses that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.ip_sets (
Name,
ChangeToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ region }}'
RETURNING
change_token,
ip_set
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ip_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the IPSet. You can't change Name after you create the IPSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ip_set"
    values={[
        { label: 'update_ip_set', value: 'update_ip_set' }
    ]}
>
<TabItem value="update_ip_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes IPSetDescriptor objects in an IPSet. For each IPSetDescriptor object, you specify the following values: Whether to insert or delete the object from the array. If you want to change an IPSetDescriptor object, you delete the existing object and add a new one. The IP address version, IPv4 or IPv6. The IP address in CIDR notation, for example, 192.0.2.0/24 (for the range of IP addresses from 192.0.2.0 to 192.0.2.255) or 192.0.2.44/32 (for the individual IP address 192.0.2.44). AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. IPv6 addresses can be represented using any of the following formats: 1111:0000:0000:0000:0000:0000:0000:0111/128 1111:0:0:0:0:0:0:0111/128 1111::0111/128 1111::111/128 You use an IPSet to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an IPSet that specifies those IP addresses, and then configure AWS WAF to block the requests. To create and configure an IPSet, perform the following steps: Submit a CreateIPSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateIPSet request. Submit an UpdateIPSet request to specify the IP addresses that you want AWS WAF to watch for. When you update an IPSet, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one. You can insert a maximum of 1000 addresses in a single request. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.ip_sets
SET 
IPSetId = '{{ IPSetId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}'
WHERE 
region = '{{ region }}' --required
AND IPSetId = '{{ IPSetId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
RETURNING
change_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ip_set"
    values={[
        { label: 'delete_ip_set', value: 'delete_ip_set' }
    ]}
>
<TabItem value="delete_ip_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes an IPSet. You can't delete an IPSet if it's still used in any Rules or if it still includes any IP addresses. If you just want to remove an IPSet from a Rule, use UpdateRule. To permanently delete an IPSet from AWS WAF, perform the following steps: Update the IPSet to remove IP address ranges, if any. For more information, see UpdateIPSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteIPSet request. Submit a DeleteIPSet request.

```sql
DELETE FROM aws.waf_regional.ip_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
