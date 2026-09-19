--- 
title: environment_info
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_info
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>environment_info</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_info" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_info" /></td></tr>
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
    <td><a href="#request_environment_info"><CopyableCode code="request_environment_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InfoType"><code>InfoType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Initiates a request to compile the specified type of information of the deployed environment. Setting the InfoType to tail compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. Setting the InfoType to bundle compresses the application server log files for every Amazon EC2 instance into a .zip file. Legacy and .NET containers do not support bundle logs. Setting the InfoType to analyze collects recent events, instance health, and logs from your environment and sends them to Amazon Bedrock in your account to generate diagnostic insights and recommended next steps. Use RetrieveEnvironmentInfo to obtain the set of logs. Related Topics RetrieveEnvironmentInfo</td>
</tr>
<tr>
    <td><a href="#retrieve_environment_info"><CopyableCode code="retrieve_environment_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InfoType"><code>InfoType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Retrieves the compiled information from a RequestEnvironmentInfo request. Related Topics RequestEnvironmentInfo</td>
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
<tr id="parameter-InfoType">
    <td><CopyableCode code="InfoType" /></td>
    <td><code>string</code></td>
    <td>The type of information to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data's environment. If no such environment is found, returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the data's environment. If no such environment is found, returns an InvalidParameterValue error. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="request_environment_info"
    values={[
        { label: 'request_environment_info', value: 'request_environment_info' },
        { label: 'retrieve_environment_info', value: 'retrieve_environment_info' }
    ]}
>
<TabItem value="request_environment_info">

Initiates a request to compile the specified type of information of the deployed environment. Setting the InfoType to tail compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. Setting the InfoType to bundle compresses the application server log files for every Amazon EC2 instance into a .zip file. Legacy and .NET containers do not support bundle logs. Setting the InfoType to analyze collects recent events, instance health, and logs from your environment and sends them to Amazon Bedrock in your account to generate diagnostic insights and recommended next steps. Use RetrieveEnvironmentInfo to obtain the set of logs. Related Topics RetrieveEnvironmentInfo

```sql
EXEC aws.elasticbeanstalk.environment_info.request_environment_info 
@InfoType='{{ InfoType }}' --required, 
@region='{{ region }}' --required, 
@EnvironmentId='{{ EnvironmentId }}', 
@EnvironmentName='{{ EnvironmentName }}'
;
```
</TabItem>
<TabItem value="retrieve_environment_info">

Retrieves the compiled information from a RequestEnvironmentInfo request. Related Topics RequestEnvironmentInfo

```sql
EXEC aws.elasticbeanstalk.environment_info.retrieve_environment_info 
@InfoType='{{ InfoType }}' --required, 
@region='{{ region }}' --required, 
@EnvironmentId='{{ EnvironmentId }}', 
@EnvironmentName='{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>
