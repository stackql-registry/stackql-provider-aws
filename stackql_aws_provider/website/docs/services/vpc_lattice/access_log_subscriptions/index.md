--- 
title: access_log_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - access_log_subscriptions
  - vpc_lattice
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

Creates, updates, deletes, gets or lists an <code>access_log_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_log_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.access_log_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_log_subscriptions"
    values={[
        { label: 'list_access_log_subscriptions', value: 'list_access_log_subscriptions' },
        { label: 'get_access_log_subscription', value: 'get_access_log_subscription' }
    ]}
>
<TabItem value="list_access_log_subscriptions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access log subscription. (pattern: &lt;code&gt;als-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access log subscription (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:accesslogsubscription/als-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the access log subscription was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the destination. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:(&#91;^/&#93;.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the access log subscription was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service or service network. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:((servicenetwork/sn)|(service/svc)|(resourceconfiguration/rcfg))-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service or service network. (pattern: &lt;code&gt;((sn)|(svc))-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkLogType" /></td>
    <td><code>string</code></td>
    <td>Log type of the service network. (SERVICE, RESOURCE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_access_log_subscription">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access log subscription. (pattern: &lt;code&gt;als-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access log subscription. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:accesslogsubscription/als-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the access log subscription was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access log destination. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:(&#91;^/&#93;.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the access log subscription was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network or service. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:((servicenetwork/sn)|(service/svc)|(resourceconfiguration/rcfg))-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network or service. (pattern: &lt;code&gt;((sn)|(svc))-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceNetworkLogType" /></td>
    <td><code>string</code></td>
    <td>The log type for the service network. (SERVICE, RESOURCE)</td>
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
    <td><a href="#list_access_log_subscriptions"><CopyableCode code="list_access_log_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the access log subscriptions for the specified service network or service.</td>
</tr>
<tr>
    <td><a href="#get_access_log_subscription"><CopyableCode code="get_access_log_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_log_subscription_identifier"><code>access_log_subscription_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified access log subscription.</td>
</tr>
<tr>
    <td><a href="#create_access_log_subscription"><CopyableCode code="create_access_log_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-destinationArn"><code>destinationArn</code></a></td>
    <td></td>
    <td>Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner can only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see Access logs in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_access_log_subscription"><CopyableCode code="update_access_log_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-access_log_subscription_identifier"><code>access_log_subscription_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationArn"><code>destinationArn</code></a></td>
    <td></td>
    <td>Updates the specified access log subscription.</td>
</tr>
<tr>
    <td><a href="#delete_access_log_subscription"><CopyableCode code="delete_access_log_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_log_subscription_identifier"><code>access_log_subscription_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified access log subscription.</td>
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
<tr id="parameter-access_log_subscription_identifier">
    <td><CopyableCode code="access_log_subscription_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the access log subscription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resourceIdentifier">
    <td><CopyableCode code="resourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service network or service.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_log_subscriptions"
    values={[
        { label: 'list_access_log_subscriptions', value: 'list_access_log_subscriptions' },
        { label: 'get_access_log_subscription', value: 'get_access_log_subscription' }
    ]}
>
<TabItem value="list_access_log_subscriptions">

Lists the access log subscriptions for the specified service network or service.

```sql
SELECT
id,
arn,
createdAt,
destinationArn,
lastUpdatedAt,
resourceArn,
resourceId,
serviceNetworkLogType
FROM aws.vpc_lattice.access_log_subscriptions
WHERE resourceIdentifier = '{{ resourceIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_access_log_subscription">

Retrieves information about the specified access log subscription.

```sql
SELECT
id,
arn,
createdAt,
destinationArn,
lastUpdatedAt,
resourceArn,
resourceId,
serviceNetworkLogType
FROM aws.vpc_lattice.access_log_subscriptions
WHERE access_log_subscription_identifier = '{{ access_log_subscription_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_log_subscription"
    values={[
        { label: 'create_access_log_subscription', value: 'create_access_log_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_log_subscription">

Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner can only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see Access logs in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.access_log_subscriptions (
clientToken,
resourceIdentifier,
destinationArn,
serviceNetworkLogType,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ resourceIdentifier }}' /* required */,
'{{ destinationArn }}' /* required */,
'{{ serviceNetworkLogType }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
destinationArn,
resourceArn,
resourceId,
serviceNetworkLogType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_log_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_log_subscriptions resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: resourceIdentifier
      value: "{{ resourceIdentifier }}"
    - name: destinationArn
      value: "{{ destinationArn }}"
    - name: serviceNetworkLogType
      value: "{{ serviceNetworkLogType }}"
      valid_values: ['SERVICE', 'RESOURCE']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_log_subscription"
    values={[
        { label: 'update_access_log_subscription', value: 'update_access_log_subscription' }
    ]}
>
<TabItem value="update_access_log_subscription">

Updates the specified access log subscription.

```sql
UPDATE aws.vpc_lattice.access_log_subscriptions
SET 
destinationArn = '{{ destinationArn }}'
WHERE 
access_log_subscription_identifier = '{{ access_log_subscription_identifier }}' --required
AND region = '{{ region }}' --required
AND destinationArn = '{{ destinationArn }}' --required
RETURNING
id,
arn,
destinationArn,
resourceArn,
resourceId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_log_subscription"
    values={[
        { label: 'delete_access_log_subscription', value: 'delete_access_log_subscription' }
    ]}
>
<TabItem value="delete_access_log_subscription">

Deletes the specified access log subscription.

```sql
DELETE FROM aws.vpc_lattice.access_log_subscriptions
WHERE access_log_subscription_identifier = '{{ access_log_subscription_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
