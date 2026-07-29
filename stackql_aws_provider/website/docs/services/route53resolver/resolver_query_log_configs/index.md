--- 
title: resolver_query_log_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_query_log_configs
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

Creates, updates, deletes, gets or lists a <code>resolver_query_log_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_query_log_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_query_log_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_query_log_config"
    values={[
        { label: 'get_resolver_query_log_config', value: 'get_resolver_query_log_config' },
        { label: 'list_resolver_query_log_configs', value: 'list_resolver_query_log_configs' }
    ]}
>
<TabItem value="get_resolver_query_log_config">

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
    <td>The ARN for the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="association_count" /></td>
    <td><code>integer</code></td>
    <td>The number of VPCs that are associated with the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request that created the query logging configuration. The CreatorRequestId allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the query logging configuration. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account that created the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM). (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified query logging configuration. Valid values include the following: CREATING: Resolver is creating the query logging configuration. CREATED: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC. DELETING: Resolver is deleting this query logging configuration. FAILED: Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes: The specified destination (for example, an Amazon S3 bucket) was deleted. Permissions don't allow sending logs to the destination. (CREATING, CREATED, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_query_log_configs">

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
    <td>The ARN for the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="association_count" /></td>
    <td><code>integer</code></td>
    <td>The number of VPCs that are associated with the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request that created the query logging configuration. The CreatorRequestId allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the query logging configuration. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account that created the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>An indication of whether the query logging configuration is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM). (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified query logging configuration. Valid values include the following: CREATING: Resolver is creating the query logging configuration. CREATED: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC. DELETING: Resolver is deleting this query logging configuration. FAILED: Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes: The specified destination (for example, an Amazon S3 bucket) was deleted. Permissions don't allow sending logs to the destination. (CREATING, CREATED, DELETING, FAILED)</td>
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
    <td><a href="#get_resolver_query_log_config"><CopyableCode code="get_resolver_query_log_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to.</td>
</tr>
<tr>
    <td><a href="#list_resolver_query_log_configs"><CopyableCode code="list_resolver_query_log_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.</td>
</tr>
<tr>
    <td><a href="#create_resolver_query_log_config"><CopyableCode code="create_resolver_query_log_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationArn"><code>DestinationArn</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a></td>
    <td></td>
    <td>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration. To specify which VPCs you want to log queries for, you use AssociateResolverQueryLogConfig. For more information, see AssociateResolverQueryLogConfig. You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</td>
</tr>
<tr>
    <td><a href="#associate_resolver_query_log_config"><CopyableCode code="associate_resolver_query_log_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverQueryLogConfigId"><code>ResolverQueryLogConfigId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one AssociateResolverQueryLogConfig request for each VPC. The VPCs that you associate with a query logging configuration must be in the same Region as the configuration. To remove a VPC from a query logging configuration, see DisassociateResolverQueryLogConfig.</td>
</tr>
<tr>
    <td><a href="#delete_resolver_query_log_config"><CopyableCode code="delete_resolver_query_log_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See DisassociateResolverQueryLogConfig. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</td>
</tr>
<tr>
    <td><a href="#disassociate_resolver_query_log_config"><CopyableCode code="disassociate_resolver_query_log_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverQueryLogConfigId"><code>ResolverQueryLogConfigId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Disassociates a VPC from a query logging configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways: The accounts that you shared the configuration with can disassociate VPCs from the configuration. You can stop sharing the configuration.</td>
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
    defaultValue="get_resolver_query_log_config"
    values={[
        { label: 'get_resolver_query_log_config', value: 'get_resolver_query_log_config' },
        { label: 'list_resolver_query_log_configs', value: 'list_resolver_query_log_configs' }
    ]}
>
<TabItem value="get_resolver_query_log_config">

Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to.

```sql
SELECT
arn,
association_count,
creation_time,
creator_request_id,
destination_arn,
id,
name,
owner_id,
share_status,
status
FROM aws.route53resolver.resolver_query_log_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_query_log_configs">

Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.

```sql
SELECT
arn,
association_count,
creation_time,
creator_request_id,
destination_arn,
id,
name,
owner_id,
share_status,
status
FROM aws.route53resolver.resolver_query_log_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resolver_query_log_config"
    values={[
        { label: 'create_resolver_query_log_config', value: 'create_resolver_query_log_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resolver_query_log_config">

Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration. To specify which VPCs you want to log queries for, you use AssociateResolverQueryLogConfig. For more information, see AssociateResolverQueryLogConfig. You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.

```sql
INSERT INTO aws.route53resolver.resolver_query_log_configs (
Name,
DestinationArn,
CreatorRequestId,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ DestinationArn }}' /* required */,
'{{ CreatorRequestId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
resolver_query_log_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resolver_query_log_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resolver_query_log_configs resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name that you want to give the query logging configuration.
    - name: DestinationArn
      value: "{{ DestinationArn }}"
      description: |
        The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream. Examples of valid values include the following: S3 bucket: arn:aws:s3:::amzn-s3-demo-bucket You can optionally append a file prefix to the end of the ARN. arn:aws:s3:::amzn-s3-demo-bucket/development/ CloudWatch Logs log group: arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:* Kinesis Data Firehose delivery stream: arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: Tags
      description: |
        A list of the tag keys and values that you want to associate with the query logging configuration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resolver_query_log_config"
    values={[
        { label: 'associate_resolver_query_log_config', value: 'associate_resolver_query_log_config' }
    ]}
>
<TabItem value="associate_resolver_query_log_config">

Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one AssociateResolverQueryLogConfig request for each VPC. The VPCs that you associate with a query logging configuration must be in the same Region as the configuration. To remove a VPC from a query logging configuration, see DisassociateResolverQueryLogConfig.

```sql
UPDATE aws.route53resolver.resolver_query_log_configs
SET 
ResolverQueryLogConfigId = '{{ ResolverQueryLogConfigId }}',
ResourceId = '{{ ResourceId }}'
WHERE 
region = '{{ region }}' --required
AND ResolverQueryLogConfigId = '{{ ResolverQueryLogConfigId }}' --required
AND ResourceId = '{{ ResourceId }}' --required
RETURNING
resolver_query_log_config_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resolver_query_log_config"
    values={[
        { label: 'delete_resolver_query_log_config', value: 'delete_resolver_query_log_config' }
    ]}
>
<TabItem value="delete_resolver_query_log_config">

Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See DisassociateResolverQueryLogConfig. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.

```sql
DELETE FROM aws.route53resolver.resolver_query_log_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resolver_query_log_config"
    values={[
        { label: 'disassociate_resolver_query_log_config', value: 'disassociate_resolver_query_log_config' }
    ]}
>
<TabItem value="disassociate_resolver_query_log_config">

Disassociates a VPC from a query logging configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways: The accounts that you shared the configuration with can disassociate VPCs from the configuration. You can stop sharing the configuration.

```sql
EXEC aws.route53resolver.resolver_query_log_configs.disassociate_resolver_query_log_config 
@region='{{ region }}' --required 
@@json=
'{
"ResolverQueryLogConfigId": "{{ ResolverQueryLogConfigId }}", 
"ResourceId": "{{ ResourceId }}"
}'
;
```
</TabItem>
</Tabs>
