--- 
title: latest_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - latest_configurations
  - appconfigdata
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

Creates, updates, deletes, gets or lists a <code>latest_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="latest_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfigdata.latest_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_latest_configuration"
    values={[
        { label: 'get_latest_configuration', value: 'get_latest_configuration' }
    ]}
>
<TabItem value="get_latest_configuration">

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
    <td><CopyableCode code="Configuration" /></td>
    <td><code>string (byte)</code></td>
    <td>The data of the configuration. This may be empty if the client already has the latest version of configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the configuration content.</td>
</tr>
<tr>
    <td><CopyableCode code="NextPollConfigurationToken" /></td>
    <td><code>string</code></td>
    <td>The latest token describing the current state of the configuration session. This must be provided to the next call to GetLatestConfiguration. This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a GetLatestConfiguration call uses an expired token, the system returns BadRequestException. (pattern: &lt;code&gt;\S&#123;1,8192&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextPollIntervalInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of time the client should wait before polling for configuration updates again. Use RequiredMinimumPollIntervalInSeconds to set the desired poll interval.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>The user-defined label for the AppConfig hosted configuration version. This attribute doesn't apply if the configuration is not from an AppConfig hosted configuration version. If the client already has the latest version of the configuration data, this value is empty.</td>
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
    <td><a href="#get_latest_configuration"><CopyableCode code="get_latest_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration_token"><code>configuration_token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the StartConfigurationSession API action, see Retrieving the configuration in the AppConfig User Guide. Note the following important information. Each configuration token is only valid for one call to GetLatestConfiguration. The GetLatestConfiguration response includes a NextPollConfigurationToken that should always replace the token used for the just-completed call in preparation for the next one. GetLatestConfiguration is a priced call. For more information, see Pricing.</td>
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
<tr id="parameter-configuration_token">
    <td><CopyableCode code="configuration_token" /></td>
    <td><code>string</code></td>
    <td>Token describing the current state of the configuration session. To obtain a token, first call the StartConfigurationSession API. Note that every call to GetLatestConfiguration will return a new ConfigurationToken (NextPollConfigurationToken in the response) and must be provided to subsequent GetLatestConfiguration API calls. This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a GetLatestConfiguration call uses an expired token, the system returns BadRequestException.</td>
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
    defaultValue="get_latest_configuration"
    values={[
        { label: 'get_latest_configuration', value: 'get_latest_configuration' }
    ]}
>
<TabItem value="get_latest_configuration">

Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the StartConfigurationSession API action, see Retrieving the configuration in the AppConfig User Guide. Note the following important information. Each configuration token is only valid for one call to GetLatestConfiguration. The GetLatestConfiguration response includes a NextPollConfigurationToken that should always replace the token used for the just-completed call in preparation for the next one. GetLatestConfiguration is a priced call. For more information, see Pricing.

```sql
SELECT
Configuration,
ContentType,
NextPollConfigurationToken,
NextPollIntervalInSeconds,
VersionLabel
FROM aws.appconfigdata.latest_configurations
WHERE configuration_token = '{{ configuration_token }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
