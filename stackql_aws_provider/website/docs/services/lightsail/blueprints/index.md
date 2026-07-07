--- 
title: blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprints
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blueprints"
    values={[
        { label: 'get_blueprints', value: 'get_blueprints' }
    ]}
>
<TabItem value="get_blueprints">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the blueprint (Amazon Linux). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appCategory" /></td>
    <td><code>string</code></td>
    <td>Virtual computer blueprints that are supported by Lightsail for Research. This parameter only applies to Lightsail for Research resources. (LfR)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintId" /></td>
    <td><code>string</code></td>
    <td>The ID for the virtual private server image (app_wordpress_x_x or app_lamp_x_x). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The group name of the blueprint (amazon-linux). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the blueprint is active. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseUrl" /></td>
    <td><code>string</code></td>
    <td>The end-user license agreement URL for the image or blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="minPower" /></td>
    <td><code>integer</code></td>
    <td>The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. 0 indicates that the blueprint runs on all instance sizes.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint. (LINUX_UNIX, WINDOWS)</td>
</tr>
<tr>
    <td><CopyableCode code="productUrl" /></td>
    <td><code>string</code></td>
    <td>The product URL to learn more about the image or blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the blueprint (os or app). (os, app)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the operating system, application, or stack ( 2016.03.0).</td>
</tr>
<tr>
    <td><CopyableCode code="versionCode" /></td>
    <td><code>string</code></td>
    <td>The version code.</td>
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
    <td><a href="#get_blueprints"><CopyableCode code="get_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of available instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose. Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</td>
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
    defaultValue="get_blueprints"
    values={[
        { label: 'get_blueprints', value: 'get_blueprints' }
    ]}
>
<TabItem value="get_blueprints">

Returns the list of available instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose. Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.

```sql
SELECT
name,
appCategory,
blueprintId,
description,
group,
isActive,
licenseUrl,
minPower,
platform,
productUrl,
type_,
version,
versionCode
FROM aws.lightsail.blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
