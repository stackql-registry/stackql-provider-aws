--- 
title: configuration_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_templates
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

Creates, updates, deletes, gets or lists a <code>configuration_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.configuration_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_templates"
    values={[
        { label: 'describe_configuration_templates', value: 'describe_configuration_templates' }
    ]}
>
<TabItem value="describe_configuration_templates">

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
    <td><CopyableCode code="allowedActionForAllowVendedLogsDeliveryForResource" /></td>
    <td><code>string</code></td>
    <td>The action permissions that a caller needs to have to be able to successfully create a delivery source on the desired resource type when calling PutDeliverySource.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedFieldDelimiters" /></td>
    <td><code>array</code></td>
    <td>The valid values that a caller can use as field delimiters when calling CreateDelivery or UpdateDeliveryConfiguration on a delivery that delivers in Plain, W3C, or Raw format.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedFields" /></td>
    <td><code>array</code></td>
    <td>The allowed fields that a caller can use in the recordFields parameter of a CreateDelivery or UpdateDeliveryConfiguration operation.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedOutputFormats" /></td>
    <td><code>array</code></td>
    <td>The list of delivery destination output formats that are supported by this log source.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedSuffixPathFields" /></td>
    <td><code>array</code></td>
    <td>The list of variable fields that can be used in the suffix path of a delivery that delivers to an S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDeliveryConfigValues" /></td>
    <td><code>object</code></td>
    <td>A mapping that displays the default value of each property within a delivery's configuration, if it is not specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="deliveryDestinationType" /></td>
    <td><code>string</code></td>
    <td>A string specifying which destination type this configuration template applies to. (S3, CWL, FH, XRAY)</td>
</tr>
<tr>
    <td><CopyableCode code="deliverySourceConfiguration" /></td>
    <td><code>array</code></td>
    <td>The schema of the delivery source configuration that is available for this log type. Each element describes a configuration that can be set when calling PutDeliverySource, including the configuration name, type, and default value.</td>
</tr>
<tr>
    <td><CopyableCode code="logType" /></td>
    <td><code>string</code></td>
    <td>A string specifying which log type this configuration template applies to. (pattern: &lt;code&gt;&#91;\w&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>A string specifying which resource type this configuration template applies to. (pattern: &lt;code&gt;&#91;\w-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3TablesIntegration" /></td>
    <td><code>object</code></td>
    <td>The S3 Tables integration configuration for this configuration template, including the datasource name and type.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>A string specifying which service this configuration template applies to. For more information about supported services see Enable logging from Amazon Web Services services.. (pattern: &lt;code&gt;&#91;\w_-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_configuration_templates"><CopyableCode code="describe_configuration_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to return the valid and default values that are used when creating delivery sources, delivery destinations, and deliveries. For more information about deliveries, see CreateDelivery.</td>
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
    defaultValue="describe_configuration_templates"
    values={[
        { label: 'describe_configuration_templates', value: 'describe_configuration_templates' }
    ]}
>
<TabItem value="describe_configuration_templates">

Use this operation to return the valid and default values that are used when creating delivery sources, delivery destinations, and deliveries. For more information about deliveries, see CreateDelivery.

```sql
SELECT
allowedActionForAllowVendedLogsDeliveryForResource,
allowedFieldDelimiters,
allowedFields,
allowedOutputFormats,
allowedSuffixPathFields,
defaultDeliveryConfigValues,
deliveryDestinationType,
deliverySourceConfiguration,
logType,
resourceType,
s3TablesIntegration,
service
FROM aws.logs.configuration_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
