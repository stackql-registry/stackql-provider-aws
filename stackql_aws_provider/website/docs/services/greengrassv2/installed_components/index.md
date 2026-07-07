--- 
title: installed_components
hide_title: false
hide_table_of_contents: false
keywords:
  - installed_components
  - greengrassv2
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

Creates, updates, deletes, gets or lists an <code>installed_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="installed_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.installed_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_installed_components"
    values={[
        { label: 'list_installed_components', value: 'list_installed_components' }
    ]}
>
<TabItem value="list_installed_components">

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
    <td><CopyableCode code="componentName" /></td>
    <td><code>string</code></td>
    <td>The name of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="componentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="isRoot" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the component is a root component.</td>
</tr>
<tr>
    <td><CopyableCode code="lastInstallationSource" /></td>
    <td><code>string</code></td>
    <td>The most recent deployment source that brought the component to the Greengrass core device. For a thing group deployment or thing deployment, the source will be the ID of the last deployment that contained the component. For local deployments it will be LOCAL. Any deployment will attempt to reinstall currently broken components on the device, which will update the last installation source.</td>
</tr>
<tr>
    <td><CopyableCode code="lastReportedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the Greengrass core device sent a message containing a component's state to the Amazon Web Services Cloud. A component does not need to see a state change for this field to update.</td>
</tr>
<tr>
    <td><CopyableCode code="lastStatusChangeTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The status of how current the data is. This response is based off of component state changes. The status reflects component disruptions and deployments. If a component only sees a configuration update during a deployment, it might not undergo a state change and this status would not be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the component. (NEW, INSTALLED, STARTING, RUNNING, STOPPING, ERRORED, BROKEN, FINISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStateDetails" /></td>
    <td><code>string</code></td>
    <td>A detailed response about the lifecycle state of the component that explains the reason why a component has an error or is broken.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStatusCodes" /></td>
    <td><code>array</code></td>
    <td>The status codes that indicate the reason for failure whenever the lifecycleState has an error or is in a broken state. Greengrass nucleus v2.8.0 or later is required to get an accurate lifecycleStatusCodes response. This response can be inaccurate in earlier Greengrass nucleus versions.</td>
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
    <td><a href="#list_installed_components"><CopyableCode code="list_installed_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-topologyFilter"><code>topologyFilter</code></a></td>
    <td>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the topologyFilter parameter to ALL. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud When the status of any component on the core device becomes BROKEN At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</td>
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
<tr id="parameter-core_device_thing_name">
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-topologyFilter">
    <td><CopyableCode code="topologyFilter" /></td>
    <td><code>string</code></td>
    <td>The filter for the list of components. Choose from the following options: ALL – The list includes all components installed on the core device. ROOT – The list includes only root components, which are components that you specify in a deployment. When you choose this option, the list doesn't include components that the core device installs as dependencies of other components. Default: ROOT</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_installed_components"
    values={[
        { label: 'list_installed_components', value: 'list_installed_components' }
    ]}
>
<TabItem value="list_installed_components">

Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the topologyFilter parameter to ALL. IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated. Core devices send status updates at the following times: When the IoT Greengrass Core software starts When the core device receives a deployment from the Amazon Web Services Cloud When the status of any component on the core device becomes BROKEN At a regular interval that you can configure, which defaults to 24 hours For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment

```sql
SELECT
componentName,
componentVersion,
isRoot,
lastInstallationSource,
lastReportedTimestamp,
lastStatusChangeTimestamp,
lifecycleState,
lifecycleStateDetails,
lifecycleStatusCodes
FROM aws.greengrassv2.installed_components
WHERE core_device_thing_name = '{{ core_device_thing_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND topologyFilter = '{{ topologyFilter }}'
;
```
</TabItem>
</Tabs>
