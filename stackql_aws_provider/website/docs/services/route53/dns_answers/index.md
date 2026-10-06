--- 
title: dns_answers
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_answers
  - route53
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

Creates, updates, deletes, gets or lists a <code>dns_answers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dns_answers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.dns_answers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#test_dns_answer"><CopyableCode code="test_dns_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostedzoneid"><code>hostedzoneid</code></a>, <a href="#parameter-recordname"><code>recordname</code></a>, <a href="#parameter-recordtype"><code>recordtype</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resolverip"><code>resolverip</code></a>, <a href="#parameter-edns0clientsubnetip"><code>edns0clientsubnetip</code></a>, <a href="#parameter-edns0clientsubnetmask"><code>edns0clientsubnetmask</code></a></td>
    <td>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. This call only supports querying public hosted zones. The TestDnsAnswer returns information similar to what you would expect from the answer section of the dig command. Therefore, if you query for the name servers of a subdomain that point to the parent name servers, those will not be returned.</td>
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
<tr id="parameter-hostedzoneid">
    <td><CopyableCode code="hostedzoneid" /></td>
    <td><code>string</code></td>
    <td>The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.</td>
</tr>
<tr id="parameter-recordname">
    <td><CopyableCode code="recordname" /></td>
    <td><code>string</code></td>
    <td>The name of the resource record set that you want Amazon Route 53 to simulate a query for.</td>
</tr>
<tr id="parameter-recordtype">
    <td><CopyableCode code="recordtype" /></td>
    <td><code>string</code></td>
    <td>The type of the resource record set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-edns0clientsubnetip">
    <td><CopyableCode code="edns0clientsubnetip" /></td>
    <td><code>string</code></td>
    <td>If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, 192.0.2.44 or 2001:db8:85a3::8a2e:370:7334.</td>
</tr>
<tr id="parameter-edns0clientsubnetmask">
    <td><CopyableCode code="edns0clientsubnetmask" /></td>
    <td><code>string</code></td>
    <td>If you specify an IP address for edns0clientsubnetip, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify 192.0.2.44 for edns0clientsubnetip and 24 for edns0clientsubnetmask, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses. The range of valid values depends on whether edns0clientsubnetip is an IPv4 or an IPv6 address: IPv4: Specify a value between 0 and 32 IPv6: Specify a value between 0 and 128</td>
</tr>
<tr id="parameter-resolverip">
    <td><CopyableCode code="resolverip" /></td>
    <td><code>string</code></td>
    <td>If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, TestDnsAnswer uses the IP address of a DNS resolver in the Amazon Web Services US East (N. Virginia) Region (us-east-1).</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="test_dns_answer"
    values={[
        { label: 'test_dns_answer', value: 'test_dns_answer' }
    ]}
>
<TabItem value="test_dns_answer">

Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. This call only supports querying public hosted zones. The TestDnsAnswer returns information similar to what you would expect from the answer section of the dig command. Therefore, if you query for the name servers of a subdomain that point to the parent name servers, those will not be returned.

```sql
EXEC aws.route53.dns_answers.test_dns_answer 
@hostedzoneid='{{ hostedzoneid }}' --required, 
@recordname='{{ recordname }}' --required, 
@recordtype='{{ recordtype }}' --required, 
@region='{{ region }}' --required, 
@resolverip='{{ resolverip }}', 
@edns0clientsubnetip='{{ edns0clientsubnetip }}', 
@edns0clientsubnetmask='{{ edns0clientsubnetmask }}'
;
```
</TabItem>
</Tabs>
