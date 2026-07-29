--- 
title: domain_controllers
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_controllers
  - ds
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

Creates, updates, deletes, gets or lists a <code>domain_controllers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_controllers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.domain_controllers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_controllers"
    values={[
        { label: 'describe_domain_controllers', value: 'describe_domain_controllers' }
    ]}
>
<TabItem value="describe_domain_controllers">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone where the domain controller is located.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the directory where the domain controller resides. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ip_addr" /></td>
    <td><code>string</code></td>
    <td>The IP address of the domain controller. (pattern: &lt;code&gt;^(?:(?:25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)\.)&#123;3&#125;(?:25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ipv_6_addr" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the domain controller. (pattern: &lt;code&gt;^((&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;7,7&#125;&#91;0-9a-fA-F&#93;&#123;1,4&#125;|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,7&#125;:|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,6&#125;:&#91;0-9a-fA-F&#93;&#123;1,4&#125;|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,5&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,2&#125;|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,4&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,3&#125;|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,3&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,4&#125;|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,2&#125;(:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,5&#125;|&#91;0-9a-fA-F&#93;&#123;1,4&#125;:((:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,6&#125;)|:((:&#91;0-9a-fA-F&#93;&#123;1,4&#125;)&#123;1,7&#125;|:)|fe80:(:&#91;0-9a-fA-F&#93;&#123;0,4&#125;)&#123;0,4&#125;%&#91;0-9a-zA-Z&#93;&#123;1,&#125;|::(ffff(:0&#123;1,4&#125;)&#123;0,1&#125;:)&#123;0,1&#125;((25&#91;0-5&#93;|(2&#91;0-4&#93;|1&#123;0,1&#125;&#91;0-9&#93;)&#123;0,1&#125;&#91;0-9&#93;)\.)&#123;3&#125;(25&#91;0-5&#93;|(2&#91;0-4&#93;|1&#123;0,1&#125;&#91;0-9&#93;)&#123;0,1&#125;&#91;0-9&#93;)|(&#91;0-9a-fA-F&#93;&#123;1,4&#125;:)&#123;1,4&#125;:((25&#91;0-5&#93;|(2&#91;0-4&#93;|1&#123;0,1&#125;&#91;0-9&#93;)&#123;0,1&#125;&#91;0-9&#93;)\.)&#123;3&#125;(25&#91;0-5&#93;|(2&#91;0-4&#93;|1&#123;0,1&#125;&#91;0-9&#93;)&#123;0,1&#125;&#91;0-9&#93;))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_controller_id" /></td>
    <td><code>string</code></td>
    <td>Identifies a specific domain controller in the directory. (pattern: &lt;code&gt;^dc-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies when the domain controller was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain controller. (Creating, Active, Impaired, Restoring, Deleting, Deleted, Failed, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status_last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A description of the domain controller state.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the subnet in the VPC that contains the domain controller. (pattern: &lt;code&gt;^(subnet-&#91;0-9a-f&#93;&#123;8&#125;|subnet-&#91;0-9a-f&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VPC that contains the domain controller. (pattern: &lt;code&gt;^(vpc-&#91;0-9a-f&#93;&#123;8&#125;|vpc-&#91;0-9a-f&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_domain_controllers"><CopyableCode code="describe_domain_controllers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about any domain controllers in your directory.</td>
</tr>
<tr>
    <td><a href="#update_number_of_domain_controllers"><CopyableCode code="update_number_of_domain_controllers" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-DesiredNumber"><code>DesiredNumber</code></a></td>
    <td></td>
    <td>Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.</td>
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
    defaultValue="describe_domain_controllers"
    values={[
        { label: 'describe_domain_controllers', value: 'describe_domain_controllers' }
    ]}
>
<TabItem value="describe_domain_controllers">

Provides information about any domain controllers in your directory.

```sql
SELECT
availability_zone,
directory_id,
dns_ip_addr,
dns_ipv_6_addr,
domain_controller_id,
launch_time,
status,
status_last_updated_date_time,
status_reason,
subnet_id,
vpc_id
FROM aws.ds.domain_controllers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_number_of_domain_controllers"
    values={[
        { label: 'update_number_of_domain_controllers', value: 'update_number_of_domain_controllers' }
    ]}
>
<TabItem value="update_number_of_domain_controllers">

Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.

```sql
UPDATE aws.ds.domain_controllers
SET 
DirectoryId = '{{ DirectoryId }}',
DesiredNumber = {{ DesiredNumber }}
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND DesiredNumber = '{{ DesiredNumber }}' --required;
```
</TabItem>
</Tabs>
