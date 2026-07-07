--- 
title: provider_services
hide_title: false
hide_table_of_contents: false
keywords:
  - provider_services
  - entityresolution
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

Creates, updates, deletes, gets or lists a <code>provider_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provider_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.provider_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provider_service"
    values={[
        { label: 'get_provider_service', value: 'get_provider_service' },
        { label: 'list_provider_services', value: 'list_provider_services' }
    ]}
>
<TabItem value="get_provider_service">

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
    <td><CopyableCode code="anonymizedOutput" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether output data from the provider is anonymized. A value of TRUE means the output will be anonymized and you can't relate the data that comes back from the provider to the identifying input. A value of FALSE means the output won't be anonymized and you can relate the data that comes back from the provider to your source data.</td>
</tr>
<tr>
    <td><CopyableCode code="providerComponentSchema" /></td>
    <td><code>object</code></td>
    <td>Input schema for the provider service.</td>
</tr>
<tr>
    <td><CopyableCode code="providerConfigurationDefinition" /></td>
    <td><code>object</code></td>
    <td>The definition of the provider configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="providerEndpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The required configuration fields to use with the provider service.</td>
</tr>
<tr>
    <td><CopyableCode code="providerEntityOutputDefinition" /></td>
    <td><code>object</code></td>
    <td>The definition of the provider entity output.</td>
</tr>
<tr>
    <td><CopyableCode code="providerIdNameSpaceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The provider configuration required for different ID namespace types.</td>
</tr>
<tr>
    <td><CopyableCode code="providerIntermediateDataAccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services accounts and the S3 permissions that are required by some providers to create an S3 bucket for intermediate data storage.</td>
</tr>
<tr>
    <td><CopyableCode code="providerJobConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provider service job configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. This name is typically the company name. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the provider service. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):(entityresolution):(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;)::providerservice/(&#91;a-zA-Z0-9_-&#93;&#123;1,255&#125;)/(&#91;a-zA-Z0-9_-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the provider service.</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the product that the provider service provides. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceType" /></td>
    <td><code>string</code></td>
    <td>The type of provider service. (ASSIGNMENT, ID_MAPPING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provider_services">

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
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. This name is typically the company name. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the providerService. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):(entityresolution):(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;)::providerservice/(&#91;a-zA-Z0-9_-&#93;&#123;1,255&#125;)/(&#91;a-zA-Z0-9_-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the provider service.</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the product that the provider service provides. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceType" /></td>
    <td><code>string</code></td>
    <td>The type of provider service. (ASSIGNMENT, ID_MAPPING)</td>
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
    <td><a href="#get_provider_service"><CopyableCode code="get_provider_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-provider_name"><code>provider_name</code></a>, <a href="#parameter-provider_service_name"><code>provider_service_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the ProviderService of a given name.</td>
</tr>
<tr>
    <td><a href="#list_provider_services"><CopyableCode code="list_provider_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-providerName"><code>providerName</code></a></td>
    <td>Returns a list of all the ProviderServices that are available in this Amazon Web Services Region.</td>
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
<tr id="parameter-provider_name">
    <td><CopyableCode code="provider_name" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. This name is typically the company name.</td>
</tr>
<tr id="parameter-provider_service_name">
    <td><CopyableCode code="provider_service_name" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the product that the provider service provides.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous API call.</td>
</tr>
<tr id="parameter-providerName">
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. This name is typically the company name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_provider_service"
    values={[
        { label: 'get_provider_service', value: 'get_provider_service' },
        { label: 'list_provider_services', value: 'list_provider_services' }
    ]}
>
<TabItem value="get_provider_service">

Returns the ProviderService of a given name.

```sql
SELECT
anonymizedOutput,
providerComponentSchema,
providerConfigurationDefinition,
providerEndpointConfiguration,
providerEntityOutputDefinition,
providerIdNameSpaceConfiguration,
providerIntermediateDataAccessConfiguration,
providerJobConfiguration,
providerName,
providerServiceArn,
providerServiceDisplayName,
providerServiceName,
providerServiceType
FROM aws.entityresolution.provider_services
WHERE provider_name = '{{ provider_name }}' -- required
AND provider_service_name = '{{ provider_service_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provider_services">

Returns a list of all the ProviderServices that are available in this Amazon Web Services Region.

```sql
SELECT
providerName,
providerServiceArn,
providerServiceDisplayName,
providerServiceName,
providerServiceType
FROM aws.entityresolution.provider_services
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND providerName = '{{ providerName }}'
;
```
</TabItem>
</Tabs>
