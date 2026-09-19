--- 
title: configuration_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sessions
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

Creates, updates, deletes, gets or lists a <code>configuration_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfigdata.configuration_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_configuration_session"><CopyableCode code="start_configuration_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationIdentifier"><code>ApplicationIdentifier</code></a>, <a href="#parameter-EnvironmentIdentifier"><code>EnvironmentIdentifier</code></a>, <a href="#parameter-ConfigurationProfileIdentifier"><code>ConfigurationProfileIdentifier</code></a></td>
    <td></td>
    <td>Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the GetLatestConfiguration API action, see Retrieving the configuration in the AppConfig User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_configuration_session"
    values={[
        { label: 'start_configuration_session', value: 'start_configuration_session' }
    ]}
>
<TabItem value="start_configuration_session">

Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the GetLatestConfiguration API action, see Retrieving the configuration in the AppConfig User Guide.

```sql
EXEC aws.appconfigdata.configuration_sessions.start_configuration_session 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationIdentifier": "{{ ApplicationIdentifier }}", 
"EnvironmentIdentifier": "{{ EnvironmentIdentifier }}", 
"ConfigurationProfileIdentifier": "{{ ConfigurationProfileIdentifier }}", 
"RequiredMinimumPollIntervalInSeconds": {{ RequiredMinimumPollIntervalInSeconds }}
}'
;
```
</TabItem>
</Tabs>
