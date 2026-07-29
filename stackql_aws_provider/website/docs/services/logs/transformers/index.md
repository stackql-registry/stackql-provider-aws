--- 
title: transformers
hide_title: false
hide_table_of_contents: false
keywords:
  - transformers
  - logs
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

Creates, updates, deletes, gets or lists a <code>transformers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transformers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.transformers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transformer"
    values={[
        { label: 'get_transformer', value: 'get_transformer' }
    ]}
>
<TabItem value="get_transformer">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the transformer, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time when this transformer was most recently modified, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the log group that you specified in your request. (pattern: &lt;code&gt;&#91;\w#+=/:,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transformer_config" /></td>
    <td><code>array</code></td>
    <td>This sructure contains the configuration of the requested transformer.</td>
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
    <td><a href="#get_transformer"><CopyableCode code="get_transformer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the information about the log transformer associated with this log group. This operation returns data only for transformers created at the log group level. To get information for an account-level transformer, use DescribeAccountPolicies.</td>
</tr>
<tr>
    <td><a href="#put_transformer"><CopyableCode code="put_transformer" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a>, <a href="#parameter-transformerConfig"><code>transformerConfig</code></a></td>
    <td></td>
    <td>Creates or updates a log transformer for a single log group. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contains relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs the transformations at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filers. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. The processors work one after another, in the order that you list them, like a pipeline. For more information about the available processors to use in a transformer, see Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can also set up a transformer at the account level. For more information, see PutAccountPolicy. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer.</td>
</tr>
<tr>
    <td><a href="#delete_transformer"><CopyableCode code="delete_transformer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the log transformer for the specified log group. As soon as you do this, the transformation of incoming log events according to that transformer stops. If this account has an account-level transformer that applies to this log group, the log group begins using that account-level transformer when this log-group level transformer is deleted. After you delete a transformer, be sure to edit any metric filters or subscription filters that relied on the transformed versions of the log events.</td>
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
    defaultValue="get_transformer"
    values={[
        { label: 'get_transformer', value: 'get_transformer' }
    ]}
>
<TabItem value="get_transformer">

Returns the information about the log transformer associated with this log group. This operation returns data only for transformers created at the log group level. To get information for an account-level transformer, use DescribeAccountPolicies.

```sql
SELECT
creation_time,
last_modified_time,
log_group_identifier,
transformer_config
FROM aws.logs.transformers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_transformer"
    values={[
        { label: 'put_transformer', value: 'put_transformer' }
    ]}
>
<TabItem value="put_transformer">

Creates or updates a log transformer for a single log group. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contains relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs the transformations at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filers. You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region. A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. The processors work one after another, in the order that you list them, like a pipeline. For more information about the available processors to use in a transformer, see Processors that you can use. Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major Amazon Web Services log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies. You can create transformers only for the log groups in the Standard log class. You can also set up a transformer at the account level. For more information, see PutAccountPolicy. If there is both a log-group level transformer created with PutTransformer and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer.

```sql
REPLACE aws.logs.transformers
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
transformerConfig = '{{ transformerConfig }}'
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required
AND transformerConfig = '{{ transformerConfig }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transformer"
    values={[
        { label: 'delete_transformer', value: 'delete_transformer' }
    ]}
>
<TabItem value="delete_transformer">

Deletes the log transformer for the specified log group. As soon as you do this, the transformation of incoming log events according to that transformer stops. If this account has an account-level transformer that applies to this log group, the log group begins using that account-level transformer when this log-group level transformer is deleted. After you delete a transformer, be sure to edit any metric filters or subscription filters that relied on the transformed versions of the log events.

```sql
DELETE FROM aws.logs.transformers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
