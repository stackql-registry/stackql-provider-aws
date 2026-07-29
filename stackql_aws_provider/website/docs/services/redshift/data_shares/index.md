--- 
title: data_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - data_shares
  - redshift
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

Creates, updates, deletes, gets or lists a <code>data_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.data_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_shares"
    values={[
        { label: 'describe_data_shares', value: 'describe_data_shares' }
    ]}
>
<TabItem value="describe_data_shares">

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
    <td><CopyableCode code="allow_publicly_accessible_consumers" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the datashare can be shared to a publicly accessible cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the datashare that the consumer is to use.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_associations" /></td>
    <td><code>string</code></td>
    <td>A value that specifies when the datashare has an association between producer and data consumers.</td>
</tr>
<tr>
    <td><CopyableCode code="data_share_type" /></td>
    <td><code>string</code></td>
    <td>The type of the datashare created by RegisterNamespace.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of a datashare to show its managing entity.</td>
</tr>
<tr>
    <td><CopyableCode code="producer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the producer namespace.</td>
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
    <td><a href="#describe_data_shares"><CopyableCode code="describe_data_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Shows the status of any inbound or outbound datashares available in the specified account.</td>
</tr>
<tr>
    <td><a href="#authorize_data_share"><CopyableCode code="authorize_data_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-ConsumerIdentifier"><code>ConsumerIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllowWrites"><code>AllowWrites</code></a></td>
    <td>From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.</td>
</tr>
<tr>
    <td><a href="#associate_data_share_consumer"><CopyableCode code="associate_data_share_consumer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssociateEntireAccount"><code>AssociateEntireAccount</code></a>, <a href="#parameter-ConsumerArn"><code>ConsumerArn</code></a>, <a href="#parameter-ConsumerRegion"><code>ConsumerRegion</code></a>, <a href="#parameter-AllowWrites"><code>AllowWrites</code></a></td>
    <td>From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.</td>
</tr>
<tr>
    <td><a href="#deauthorize_data_share"><CopyableCode code="deauthorize_data_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-ConsumerIdentifier"><code>ConsumerIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>From a datashare producer account, removes authorization from the specified datashare.</td>
</tr>
<tr>
    <td><a href="#disassociate_data_share_consumer"><CopyableCode code="disassociate_data_share_consumer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DisassociateEntireAccount"><code>DisassociateEntireAccount</code></a>, <a href="#parameter-ConsumerArn"><code>ConsumerArn</code></a>, <a href="#parameter-ConsumerRegion"><code>ConsumerRegion</code></a></td>
    <td>From a datashare consumer account, remove association for the specified datashare.</td>
</tr>
<tr>
    <td><a href="#reject_data_share"><CopyableCode code="reject_data_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DataShareArn"><code>DataShareArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>From a datashare consumer account, rejects the specified datashare.</td>
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
<tr id="parameter-ConsumerIdentifier">
    <td><CopyableCode code="ConsumerIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data consumer that is to have authorization removed from the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.</td>
</tr>
<tr id="parameter-DataShareArn">
    <td><CopyableCode code="DataShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the datashare to reject.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowWrites">
    <td><CopyableCode code="AllowWrites" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, allows write operations for a datashare.</td>
</tr>
<tr id="parameter-AssociateEntireAccount">
    <td><CopyableCode code="AssociateEntireAccount" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether the datashare is associated with the entire account.</td>
</tr>
<tr id="parameter-ConsumerArn">
    <td><CopyableCode code="ConsumerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consumer namespace that association for the datashare is removed from.</td>
</tr>
<tr id="parameter-ConsumerRegion">
    <td><CopyableCode code="ConsumerRegion" /></td>
    <td><code>string</code></td>
    <td>From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.</td>
</tr>
<tr id="parameter-DataShareArn">
    <td><CopyableCode code="DataShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the datashare to describe details of.</td>
</tr>
<tr id="parameter-DisassociateEntireAccount">
    <td><CopyableCode code="DisassociateEntireAccount" /></td>
    <td><code>boolean</code></td>
    <td>A value that specifies whether association for the datashare is removed from the entire account.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataShares request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_shares"
    values={[
        { label: 'describe_data_shares', value: 'describe_data_shares' }
    ]}
>
<TabItem value="describe_data_shares">

Shows the status of any inbound or outbound datashares available in the specified account.

```sql
SELECT
allow_publicly_accessible_consumers,
data_share_arn,
data_share_associations,
data_share_type,
managed_by,
producer_arn
FROM aws.redshift.data_shares
WHERE region = '{{ region }}' -- required
AND DataShareArn = '{{ DataShareArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_data_share"
    values={[
        { label: 'authorize_data_share', value: 'authorize_data_share' },
        { label: 'associate_data_share_consumer', value: 'associate_data_share_consumer' }
    ]}
>
<TabItem value="authorize_data_share">

From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts or managing entities. To authorize a datashare for a data consumer, the producer account must have the correct access permissions.

```sql
UPDATE aws.redshift.data_shares
SET 
-- No updatable properties
WHERE 
DataShareArn = '{{ DataShareArn }}' --required
AND ConsumerIdentifier = '{{ ConsumerIdentifier }}' --required
AND region = '{{ region }}' --required
AND AllowWrites = {{ AllowWrites}}
RETURNING
allow_publicly_accessible_consumers,
data_share_arn,
data_share_associations,
data_share_type,
managed_by,
producer_arn;
```
</TabItem>
<TabItem value="associate_data_share_consumer">

From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.

```sql
UPDATE aws.redshift.data_shares
SET 
-- No updatable properties
WHERE 
DataShareArn = '{{ DataShareArn }}' --required
AND region = '{{ region }}' --required
AND AssociateEntireAccount = {{ AssociateEntireAccount}}
AND ConsumerArn = '{{ ConsumerArn}}'
AND ConsumerRegion = '{{ ConsumerRegion}}'
AND AllowWrites = {{ AllowWrites}}
RETURNING
allow_publicly_accessible_consumers,
data_share_arn,
data_share_associations,
data_share_type,
managed_by,
producer_arn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deauthorize_data_share"
    values={[
        { label: 'deauthorize_data_share', value: 'deauthorize_data_share' },
        { label: 'disassociate_data_share_consumer', value: 'disassociate_data_share_consumer' },
        { label: 'reject_data_share', value: 'reject_data_share' }
    ]}
>
<TabItem value="deauthorize_data_share">

From a datashare producer account, removes authorization from the specified datashare.

```sql
EXEC aws.redshift.data_shares.deauthorize_data_share 
@DataShareArn='{{ DataShareArn }}' --required, 
@ConsumerIdentifier='{{ ConsumerIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="disassociate_data_share_consumer">

From a datashare consumer account, remove association for the specified datashare.

```sql
EXEC aws.redshift.data_shares.disassociate_data_share_consumer 
@DataShareArn='{{ DataShareArn }}' --required, 
@region='{{ region }}' --required, 
@DisassociateEntireAccount={{ DisassociateEntireAccount }}, 
@ConsumerArn='{{ ConsumerArn }}', 
@ConsumerRegion='{{ ConsumerRegion }}'
;
```
</TabItem>
<TabItem value="reject_data_share">

From a datashare consumer account, rejects the specified datashare.

```sql
EXEC aws.redshift.data_shares.reject_data_share 
@DataShareArn='{{ DataShareArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
