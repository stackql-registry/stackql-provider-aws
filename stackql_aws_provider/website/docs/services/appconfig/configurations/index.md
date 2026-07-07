--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - appconfig
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

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
    <td><CopyableCode code="ConfigurationVersion" /></td>
    <td><code>string</code></td>
    <td>The configuration version.</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>string (byte)</code></td>
    <td>The content of the configuration or the configuration data. The Content attribute only contains data if the system finds new or updated configuration data. If there is no new or updated data and ClientConfigurationVersion matches the version of the current configuration, AppConfig returns a 204 No Content HTTP response code and the Content value will be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the configuration content. For more information, see Content-Type.</td>
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
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-client_configuration_version"><code>client_configuration_version</code></a></td>
    <td>(Deprecated) Retrieves the latest deployed configuration. Note the following important information. This API action is deprecated. Calls to receive configuration data should use the StartConfigurationSession and GetLatestConfiguration APIs instead. GetConfiguration is a priced call. For more information, see Pricing.</td>
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
<tr id="parameter-application">
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The application to get. Specify either the application name or the application ID.</td>
</tr>
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The clientId parameter in the following command is a unique, user-specified ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy.</td>
</tr>
<tr id="parameter-configuration">
    <td><CopyableCode code="configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration to get. Specify either the configuration name or the configuration ID.</td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment to get. Specify either the environment name or the environment ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-client_configuration_version">
    <td><CopyableCode code="client_configuration_version" /></td>
    <td><code>string</code></td>
    <td>The configuration version returned in the most recent GetConfiguration response. AppConfig uses the value of the ClientConfigurationVersion parameter to identify the configuration version on your clients. If you don’t send ClientConfigurationVersion with each call to GetConfiguration, your clients receive the current configuration. You are charged each time your clients receive a configuration. To avoid excess charges, we recommend you use the StartConfigurationSession and GetLatestConfiguration APIs, which track the client configuration version on your behalf. If you choose to continue using GetConfiguration, we recommend that you include the ClientConfigurationVersion value with every call to GetConfiguration. The value to use for ClientConfigurationVersion comes from the ConfigurationVersion attribute returned by GetConfiguration when there is new or updated data, and should be saved for subsequent calls to GetConfiguration. For more information about working with configurations, see Retrieving feature flags and configuration data in AppConfig in the AppConfig User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' }
    ]}
>
<TabItem value="get_configuration">

(Deprecated) Retrieves the latest deployed configuration. Note the following important information. This API action is deprecated. Calls to receive configuration data should use the StartConfigurationSession and GetLatestConfiguration APIs instead. GetConfiguration is a priced call. For more information, see Pricing.

```sql
SELECT
ConfigurationVersion,
Content,
ContentType
FROM aws.appconfig.configurations
WHERE application = '{{ application }}' -- required
AND environment = '{{ environment }}' -- required
AND configuration = '{{ configuration }}' -- required
AND client_id = '{{ client_id }}' -- required
AND region = '{{ region }}' -- required
AND client_configuration_version = '{{ client_configuration_version }}'
;
```
</TabItem>
</Tabs>
