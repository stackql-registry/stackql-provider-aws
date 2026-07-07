--- 
title: bootstrap_brokers
hide_title: false
hide_table_of_contents: false
keywords:
  - bootstrap_brokers
  - kafka
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

Creates, updates, deletes, gets or lists a <code>bootstrap_brokers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bootstrap_brokers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.bootstrap_brokers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bootstrap_brokers"
    values={[
        { label: 'get_bootstrap_brokers', value: 'get_bootstrap_brokers' }
    ]}
>
<TabItem value="get_bootstrap_brokers">

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
    <td><CopyableCode code="BootstrapBrokerString" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more hostname:port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringIpv6" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP) and port pairs for IPv6 connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringPublicSaslIam" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringPublicSaslScram" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringPublicTls" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and TLS port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringSaslIam" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringSaslIamIpv6" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP) and SASL IAM port pairs for IPv6 connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringSaslScram" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringSaslScramIpv6" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP) and SASL SCRAM port pairs for IPv6 connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringTls" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and TLS port pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringTlsIpv6" /></td>
    <td><code>string</code></td>
    <td>A string that contains one or more DNS names (or IP) and TLS port pairs for IPv6 connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringVpcConnectivitySaslIam" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and SASL/IAM port pairs for VPC connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringVpcConnectivitySaslScram" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and SASL/SCRAM port pairs for VPC connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="BootstrapBrokerStringVpcConnectivityTls" /></td>
    <td><code>string</code></td>
    <td>A string containing one or more DNS names (or IP) and TLS port pairs for VPC connectivity.</td>
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
    <td><a href="#get_bootstrap_brokers"><CopyableCode code="get_bootstrap_brokers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of brokers that a client application can use to bootstrap. This list doesn't necessarily include all of the brokers in the cluster. The following Python 3.6 example shows how you can use the Amazon Resource Name (ARN) of a cluster to get its bootstrap brokers. If you don't know the ARN of your cluster, you can use the ListClusters operation to get the ARNs of all the clusters in this account and Region.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bootstrap_brokers"
    values={[
        { label: 'get_bootstrap_brokers', value: 'get_bootstrap_brokers' }
    ]}
>
<TabItem value="get_bootstrap_brokers">

A list of brokers that a client application can use to bootstrap. This list doesn't necessarily include all of the brokers in the cluster. The following Python 3.6 example shows how you can use the Amazon Resource Name (ARN) of a cluster to get its bootstrap brokers. If you don't know the ARN of your cluster, you can use the ListClusters operation to get the ARNs of all the clusters in this account and Region.

```sql
SELECT
BootstrapBrokerString,
BootstrapBrokerStringIpv6,
BootstrapBrokerStringPublicSaslIam,
BootstrapBrokerStringPublicSaslScram,
BootstrapBrokerStringPublicTls,
BootstrapBrokerStringSaslIam,
BootstrapBrokerStringSaslIamIpv6,
BootstrapBrokerStringSaslScram,
BootstrapBrokerStringSaslScramIpv6,
BootstrapBrokerStringTls,
BootstrapBrokerStringTlsIpv6,
BootstrapBrokerStringVpcConnectivitySaslIam,
BootstrapBrokerStringVpcConnectivitySaslScram,
BootstrapBrokerStringVpcConnectivityTls
FROM aws.kafka.bootstrap_brokers
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
