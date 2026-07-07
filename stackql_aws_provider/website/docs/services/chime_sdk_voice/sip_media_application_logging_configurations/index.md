--- 
title: sip_media_application_logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - sip_media_application_logging_configurations
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>sip_media_application_logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sip_media_application_logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.sip_media_application_logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sip_media_application_logging_configuration"
    values={[
        { label: 'get_sip_media_application_logging_configuration', value: 'get_sip_media_application_logging_configuration' }
    ]}
>
<TabItem value="get_sip_media_application_logging_configuration">

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
    <td><CopyableCode code="EnableSipMediaApplicationMessageLogs" /></td>
    <td><code>boolean</code></td>
    <td>Enables message logging for the specified SIP media application.</td>
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
    <td><a href="#get_sip_media_application_logging_configuration"><CopyableCode code="get_sip_media_application_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the logging configuration for the specified SIP media application.</td>
</tr>
<tr>
    <td><a href="#put_sip_media_application_logging_configuration"><CopyableCode code="put_sip_media_application_logging_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-sip_media_application_id"><code>sip_media_application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the logging configuration for the specified SIP media application.</td>
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
<tr id="parameter-sip_media_application_id">
    <td><CopyableCode code="sip_media_application_id" /></td>
    <td><code>string</code></td>
    <td>The SIP media application ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sip_media_application_logging_configuration"
    values={[
        { label: 'get_sip_media_application_logging_configuration', value: 'get_sip_media_application_logging_configuration' }
    ]}
>
<TabItem value="get_sip_media_application_logging_configuration">

Retrieves the logging configuration for the specified SIP media application.

```sql
SELECT
EnableSipMediaApplicationMessageLogs
FROM aws.chime_sdk_voice.sip_media_application_logging_configurations
WHERE sip_media_application_id = '{{ sip_media_application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_sip_media_application_logging_configuration"
    values={[
        { label: 'put_sip_media_application_logging_configuration', value: 'put_sip_media_application_logging_configuration' }
    ]}
>
<TabItem value="put_sip_media_application_logging_configuration">

Updates the logging configuration for the specified SIP media application.

```sql
REPLACE aws.chime_sdk_voice.sip_media_application_logging_configurations
SET 
SipMediaApplicationLoggingConfiguration = '{{ SipMediaApplicationLoggingConfiguration }}'
WHERE 
sip_media_application_id = '{{ sip_media_application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
SipMediaApplicationLoggingConfiguration;
```
</TabItem>
</Tabs>
