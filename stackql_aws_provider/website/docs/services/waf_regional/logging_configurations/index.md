--- 
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
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

Creates, updates, deletes, gets or lists a <code>logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logging_configuration"
    values={[
        { label: 'get_logging_configuration', value: 'get_logging_configuration' },
        { label: 'list_logging_configurations', value: 'list_logging_configurations' }
    ]}
>
<TabItem value="get_logging_configuration">

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
    <td><CopyableCode code="LogDestinationConfigs" /></td>
    <td><code>array</code></td>
    <td>An array of Amazon Kinesis Data Firehose ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="RedactedFields" /></td>
    <td><code>array</code></td>
    <td>The parts of the request that you want redacted from the logs. For example, if you redact the cookie field, the cookie field in the firehose will be xxx.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_logging_configurations">

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
    <td><CopyableCode code="LoggingConfigurations" /></td>
    <td><code>array</code></td>
    <td>An array of LoggingConfiguration objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If you have more LoggingConfigurations than the number that you specified for Limit in the request, the response includes a NextMarker value. To list more LoggingConfigurations, submit another ListLoggingConfigurations request, and specify the NextMarker value from the response in the NextMarker value in the next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_logging_configuration"><CopyableCode code="get_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the LoggingConfiguration for the specified web ACL.</td>
</tr>
<tr>
    <td><a href="#list_logging_configurations"><CopyableCode code="list_logging_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of LoggingConfiguration objects.</td>
</tr>
<tr>
    <td><a href="#put_logging_configuration"><CopyableCode code="put_logging_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LoggingConfiguration"><code>LoggingConfiguration</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Associates a LoggingConfiguration with a specified web ACL. You can access information about all traffic that AWS WAF inspects using the following steps: Create an Amazon Kinesis Data Firehose. Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). Do not create the data firehose using a Kinesis stream as your source. Associate that firehose to your web ACL using a PutLoggingConfiguration request. When you successfully enable logging using a PutLoggingConfiguration request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see Logging Web ACL Traffic Information in the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_logging_configuration"><CopyableCode code="delete_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes the LoggingConfiguration from the specified web ACL.</td>
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
    defaultValue="get_logging_configuration"
    values={[
        { label: 'get_logging_configuration', value: 'get_logging_configuration' },
        { label: 'list_logging_configurations', value: 'list_logging_configurations' }
    ]}
>
<TabItem value="get_logging_configuration">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the LoggingConfiguration for the specified web ACL.

```sql
SELECT
LogDestinationConfigs,
RedactedFields,
ResourceArn
FROM aws.waf_regional.logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_logging_configurations">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of LoggingConfiguration objects.

```sql
SELECT
LoggingConfigurations,
NextMarker
FROM aws.waf_regional.logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_logging_configuration"
    values={[
        { label: 'put_logging_configuration', value: 'put_logging_configuration' }
    ]}
>
<TabItem value="put_logging_configuration">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Associates a LoggingConfiguration with a specified web ACL. You can access information about all traffic that AWS WAF inspects using the following steps: Create an Amazon Kinesis Data Firehose. Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). Do not create the data firehose using a Kinesis stream as your source. Associate that firehose to your web ACL using a PutLoggingConfiguration request. When you successfully enable logging using a PutLoggingConfiguration request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see Logging Web ACL Traffic Information in the AWS WAF Developer Guide.

```sql
REPLACE aws.waf_regional.logging_configurations
SET 
LoggingConfiguration = '{{ LoggingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND LoggingConfiguration = '{{ LoggingConfiguration }}' --required
RETURNING
LoggingConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_logging_configuration"
    values={[
        { label: 'delete_logging_configuration', value: 'delete_logging_configuration' }
    ]}
>
<TabItem value="delete_logging_configuration">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes the LoggingConfiguration from the specified web ACL.

```sql
DELETE FROM aws.waf_regional.logging_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
