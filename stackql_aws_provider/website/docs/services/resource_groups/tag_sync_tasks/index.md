--- 
title: tag_sync_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_sync_tasks
  - resource_groups
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

Creates, updates, deletes, gets or lists a <code>tag_sync_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_sync_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.tag_sync_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_sync_task"
    values={[
        { label: 'get_tag_sync_task', value: 'get_tag_sync_task' },
        { label: 'list_tag_sync_tasks', value: 'list_tag_sync_tasks' }
    ]}
>
<TabItem value="get_tag_sync_task">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the tag-sync task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The specific error message in cases where the tag-sync task status is ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the application group. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/(&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_query" /></td>
    <td><code>object</code></td>
    <td>The query you can use to define a resource group or a search for resources. A ResourceQuery specifies both a query Type and a Query string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete ResourceQuery parameter must be formatted like the following CLI parameter example: --resource-query '&#123;"Type":"TAG_FILTERS_1_0","Query":"&#123;\"ResourceTypeFilters\":&#91;\"AWS::AllSupported\"&#93;,\"TagFilters\":&#91;&#123;\"Key\":\"Stage\",\"Values\":&#91;\"Test\"&#93;&#125;&#93;&#125;"&#125;' In the preceding example, all of the double quote characters in the value part of the Query element must be escaped because the value itself is surrounded by double quotes. For more information, see Quoting strings in the Command Line Interface User Guide. For the complete list of resource types that you can use in the array value for ResourceTypeFilters, see Resources you can use with Resource Groups and Tag Editor in the Resource Groups User Guide. For example: "ResourceTypeFilters":&#91;"AWS::S3::Bucket", "AWS::EC2::Instance"&#93;</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the role assumed by Resource Groups to tag and untag resources on your behalf. For more information about this role, review Tag-sync required permissions. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the tag-sync task. Valid values include: ACTIVE - The tag-sync task is actively managing resources in the application by adding or removing the awsApplication tag from resources when they are tagged or untagged with the specified tag key-value pair. ERROR - The tag-sync task is not actively managing resources in the application. Review the ErrorMessage for more information about resolving the error. (ACTIVE, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The tag key. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_value" /></td>
    <td><code>string</code></td>
    <td>The tag value. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the tag-sync task. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;/tag-sync-task/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_sync_tasks">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the tag-sync task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The specific error message in cases where the tag-sync task status is Error.</td>
</tr>
<tr>
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the application group. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/(&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_query" /></td>
    <td><code>object</code></td>
    <td>The query you can use to define a resource group or a search for resources. A ResourceQuery specifies both a query Type and a Query string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete ResourceQuery parameter must be formatted like the following CLI parameter example: --resource-query '&#123;"Type":"TAG_FILTERS_1_0","Query":"&#123;\"ResourceTypeFilters\":&#91;\"AWS::AllSupported\"&#93;,\"TagFilters\":&#91;&#123;\"Key\":\"Stage\",\"Values\":&#91;\"Test\"&#93;&#125;&#93;&#125;"&#125;' In the preceding example, all of the double quote characters in the value part of the Query element must be escaped because the value itself is surrounded by double quotes. For more information, see Quoting strings in the Command Line Interface User Guide. For the complete list of resource types that you can use in the array value for ResourceTypeFilters, see Resources you can use with Resource Groups and Tag Editor in the Resource Groups User Guide. For example: "ResourceTypeFilters":&#91;"AWS::S3::Bucket", "AWS::EC2::Instance"&#93;</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the tag-sync task. Valid values include: ACTIVE - The tag-sync task is actively managing resources in the application by adding or removing the awsApplication tag from resources when they are tagged or untagged with the specified tag key-value pair. ERROR - The tag-sync task is not actively managing resources in the application. Review the ErrorMessage for more information about resolving the error. (ACTIVE, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The tag key. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_value" /></td>
    <td><code>string</code></td>
    <td>The tag value. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the tag-sync task. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;/tag-sync-task/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_tag_sync_task"><CopyableCode code="get_tag_sync_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified tag-sync task. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetTagSyncTask on the application group</td>
</tr>
<tr>
    <td><a href="#list_tag_sync_tasks"><CopyableCode code="list_tag_sync_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tag-sync tasks. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListTagSyncTasks with the group passed in the filters as the resource or * if using no filters</td>
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
    defaultValue="get_tag_sync_task"
    values={[
        { label: 'get_tag_sync_task', value: 'get_tag_sync_task' },
        { label: 'list_tag_sync_tasks', value: 'list_tag_sync_tasks' }
    ]}
>
<TabItem value="get_tag_sync_task">

Returns information about a specified tag-sync task. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetTagSyncTask on the application group

```sql
SELECT
created_at,
error_message,
group_arn,
group_name,
resource_query,
role_arn,
status,
tag_key,
tag_value,
task_arn
FROM aws.resource_groups.tag_sync_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tag_sync_tasks">

Returns a list of tag-sync tasks. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListTagSyncTasks with the group passed in the filters as the resource or * if using no filters

```sql
SELECT
created_at,
error_message,
group_arn,
group_name,
resource_query,
role_arn,
status,
tag_key,
tag_value,
task_arn
FROM aws.resource_groups.tag_sync_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
