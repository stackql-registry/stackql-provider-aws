--- 
title: ip_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sets
  - wafv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.ip_sets" /></td></tr>
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
    <td><CopyableCode code="ip_set" /></td>
    <td><code>object</code></td>
    <td>Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. WAF assigns an ARN to each IPSet that you create. To use an IP set in a rule, you provide the ARN to the Rule statement IPSetReferenceStatement.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_token" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td>Array of IPSets. If you specified a Limit in your request, this might not be the full list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td>Retrieves the specified IPSet.</td>
</tr>
<tr>
    <td><a href="#list_ip_sets"><CopyableCode code="list_ip_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an array of IPSetSummary objects for the IP sets that you manage.</td>
</tr>
<tr>
    <td><a href="#create_ip_set"><CopyableCode code="create_ip_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-IPAddressVersion"><code>IPAddressVersion</code></a>, <a href="#parameter-Addresses"><code>Addresses</code></a></td>
    <td></td>
    <td>Creates an IPSet, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses.</td>
</tr>
<tr>
    <td><a href="#update_ip_set"><CopyableCode code="update_ip_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-Addresses"><code>Addresses</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a></td>
    <td></td>
    <td>Updates the specified IPSet. This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. To modify an IP set, do the following: Retrieve it by calling GetIPSet Update its settings as needed Provide the complete IP set specification to this call Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</td>
</tr>
<tr>
    <td><a href="#delete_ip_set"><CopyableCode code="delete_ip_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified IPSet.</td>
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

Retrieves the specified IPSet.

```sql
SELECT
ip_set,
lock_token
FROM aws.wafv2.ip_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ip_sets">

Retrieves an array of IPSetSummary objects for the IP sets that you manage.

```sql
SELECT
ip_sets,
next_marker
FROM aws.wafv2.ip_sets
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

Creates an IPSet, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses.

```sql
INSERT INTO aws.wafv2.ip_sets (
Name,
Scope,
Description,
IPAddressVersion,
Addresses,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Scope }}' /* required */,
'{{ Description }}',
'{{ IPAddressVersion }}' /* required */,
'{{ Addresses }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
summary
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
        The name of the IP set. You cannot change the name of an IPSet after you create it.
    - name: Scope
      value: "{{ Scope }}"
      description: |
        Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
      valid_values: ['CLOUDFRONT', 'REGIONAL']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the IP set that helps with identification.
    - name: IPAddressVersion
      value: "{{ IPAddressVersion }}"
      description: |
        The version of the IP addresses, either IPV4 or IPV6.
      valid_values: ['IPV4', 'IPV6']
    - name: Addresses
      value:
        - "{{ Addresses }}"
      description: |
        Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. Example address strings: For requests that originated from the IP address 192.0.2.44, specify 192.0.2.44/32. For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24. For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify 1111:0000:0000:0000:0000:0000:0000:0111/128. For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify 1111:0000:0000:0000:0000:0000:0000:0000/64. For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. Example JSON Addresses specifications: Empty array: "Addresses": [] Array with one address: "Addresses": ["192.0.2.44/32"] Array with three addresses: "Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"] INVALID specification: "Addresses": [""] INVALID
    - name: Tags
      description: |
        An array of key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates the specified IPSet. This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. To modify an IP set, do the following: Retrieve it by calling GetIPSet Update its settings as needed Provide the complete IP set specification to this call Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.

```sql
UPDATE aws.wafv2.ip_sets
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
Description = '{{ Description }}',
Addresses = '{{ Addresses }}',
LockToken = '{{ LockToken }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND Addresses = '{{ Addresses }}' --required
AND LockToken = '{{ LockToken }}' --required
RETURNING
next_lock_token;
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

Deletes the specified IPSet.

```sql
DELETE FROM aws.wafv2.ip_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
