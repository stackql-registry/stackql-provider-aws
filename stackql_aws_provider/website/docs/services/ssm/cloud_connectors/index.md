--- 
title: cloud_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_connectors
  - ssm
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

Creates, updates, deletes, gets or lists a <code>cloud_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.cloud_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_connector"
    values={[
        { label: 'get_cloud_connector', value: 'get_cloud_connector' },
        { label: 'list_cloud_connectors', value: 'list_cloud_connectors' }
    ]}
>
<TabItem value="get_cloud_connector">

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
    <td><CopyableCode code="cloud_connector_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the cloud connector. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:ssm:(&#91;^:&#93;+):\d&#123;12&#125;:cloud-connector/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="config_connector_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services Config connector associated with this cloud connector. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:config:(&#91;^:&#93;+):\d&#123;12&#125;:connector/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration details for the third-party cloud environment connection.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the cloud connector. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;M&#125;&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the cloud connector. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;M&#125;&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role used by the cloud connector. (pattern: &lt;code&gt;^arn:aws&#91;a-z0-9-&#93;*:iam::\d&#123;12&#125;:role\/&#91;\w-\/.@+=,&#93;&#123;1,1017&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud connector was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_connectors">

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
    <td><CopyableCode code="cloud_connector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cloud connector. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the cloud connector. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;M&#125;&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the cloud connector. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;M&#125;&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role used by the cloud connector. (pattern: &lt;code&gt;^arn:aws&#91;a-z0-9-&#93;*:iam::\d&#123;12&#125;:role\/&#91;\w-\/.@+=,&#93;&#123;1,1017&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud connector was last updated.</td>
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
    <td><a href="#get_cloud_connector"><CopyableCode code="get_cloud_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a cloud connector.</td>
</tr>
<tr>
    <td><a href="#list_cloud_connectors"><CopyableCode code="list_cloud_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of cloud connectors in the current Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_cloud_connector"><CopyableCode code="create_cloud_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-ConfigConnectorArn"><code>ConfigConnectorArn</code></a></td>
    <td></td>
    <td>Creates a cloud connector that establishes a connection between Systems Manager and a third-party cloud environment.</td>
</tr>
<tr>
    <td><a href="#update_cloud_connector"><CopyableCode code="update_cloud_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CloudConnectorId"><code>CloudConnectorId</code></a></td>
    <td></td>
    <td>Updates an existing cloud connector with new configuration details.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_connector"><CopyableCode code="delete_cloud_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cloud connector.</td>
</tr>
<tr>
    <td><a href="#validate_cloud_connector"><CopyableCode code="validate_cloud_connector" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CloudConnectorId"><code>CloudConnectorId</code></a></td>
    <td></td>
    <td>Validates the configuration and connectivity of a cloud connector.</td>
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
    defaultValue="get_cloud_connector"
    values={[
        { label: 'get_cloud_connector', value: 'get_cloud_connector' },
        { label: 'list_cloud_connectors', value: 'list_cloud_connectors' }
    ]}
>
<TabItem value="get_cloud_connector">

Returns detailed information about a cloud connector.

```sql
SELECT
cloud_connector_arn,
config_connector_arn,
configuration,
created_at,
description,
display_name,
role_arn,
updated_at
FROM aws.ssm.cloud_connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_connectors">

Returns a list of cloud connectors in the current Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
cloud_connector_id,
created_at,
description,
display_name,
role_arn,
updated_at
FROM aws.ssm.cloud_connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_connector"
    values={[
        { label: 'create_cloud_connector', value: 'create_cloud_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_connector">

Creates a cloud connector that establishes a connection between Systems Manager and a third-party cloud environment.

```sql
INSERT INTO aws.ssm.cloud_connectors (
DisplayName,
RoleArn,
Description,
Configuration,
ConfigConnectorArn,
Tags,
region
)
SELECT 
'{{ DisplayName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Description }}',
'{{ Configuration }}',
'{{ ConfigConnectorArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
cloud_connector_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_connectors resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        A friendly name for the cloud connector.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that the cloud connector uses to communicate with the third-party cloud environment.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the cloud connector.
    - name: Configuration
      description: |
        The configuration details for connecting to the third-party cloud environment.
      value:
        AzureConfiguration:
          TenantId: "{{ TenantId }}"
          TenantDisplayName: "{{ TenantDisplayName }}"
          ApplicationId: "{{ ApplicationId }}"
          ApplicationDisplayName: "{{ ApplicationDisplayName }}"
          Targets:
            Subscriptions:
              - Id: "{{ Id }}"
                DisplayName: "{{ DisplayName }}"
    - name: ConfigConnectorArn
      value: "{{ ConfigConnectorArn }}"
      description: |
        The ARN of the Amazon Web Services Config connector associated with this cloud connector.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_connector"
    values={[
        { label: 'update_cloud_connector', value: 'update_cloud_connector' }
    ]}
>
<TabItem value="update_cloud_connector">

Updates an existing cloud connector with new configuration details.

```sql
UPDATE aws.ssm.cloud_connectors
SET 
CloudConnectorId = '{{ CloudConnectorId }}',
DisplayName = '{{ DisplayName }}',
Configuration = '{{ Configuration }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND CloudConnectorId = '{{ CloudConnectorId }}' --required
RETURNING
cloud_connector_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_connector"
    values={[
        { label: 'delete_cloud_connector', value: 'delete_cloud_connector' }
    ]}
>
<TabItem value="delete_cloud_connector">

Deletes a cloud connector.

```sql
DELETE FROM aws.ssm.cloud_connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_cloud_connector"
    values={[
        { label: 'validate_cloud_connector', value: 'validate_cloud_connector' }
    ]}
>
<TabItem value="validate_cloud_connector">

Validates the configuration and connectivity of a cloud connector.

```sql
EXEC aws.ssm.cloud_connectors.validate_cloud_connector 
@region='{{ region }}' --required 
@@json=
'{
"CloudConnectorId": "{{ CloudConnectorId }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
