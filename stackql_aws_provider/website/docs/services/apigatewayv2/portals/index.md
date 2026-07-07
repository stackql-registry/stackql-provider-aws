--- 
title: portals
hide_title: false
hide_table_of_contents: false
keywords:
  - portals
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>portals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.portals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portal"
    values={[
        { label: 'get_portal', value: 'get_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="get_portal">

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
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>Represents an authorization configuration for a portal.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludedPortalProductArns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the portal products included in the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal was last published.</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublishedDescription" /></td>
    <td><code>string</code></td>
    <td>The publish description used when the portal was last published.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalContent" /></td>
    <td><code>object</code></td>
    <td>Contains the content that is visible to portal consumers including the themes, display names, and description.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalId" /></td>
    <td><code>string</code></td>
    <td>The portal identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Preview" /></td>
    <td><code>object</code></td>
    <td>Represents the preview endpoint and the any possible error messages during preview generation.</td>
</tr>
<tr>
    <td><CopyableCode code="PublishStatus" /></td>
    <td><code>string</code></td>
    <td>The publish status of a portal. (PUBLISHED, PUBLISH_IN_PROGRESS, PUBLISH_FAILED, DISABLE_IN_PROGRESS, DISABLE_FAILED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="RumAppMonitorName" /></td>
    <td><code>string</code></td>
    <td>The CloudWatch RUM app monitor name.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusException" /></td>
    <td><code>object</code></td>
    <td>The status exception information.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_portals">

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
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>Represents an authorization configuration for a portal.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfiguration" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration of the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludedPortalProductArns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the portal products included in the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the portal was last published.</td>
</tr>
<tr>
    <td><CopyableCode code="LastPublishedDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the portal the last time it was published.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalContent" /></td>
    <td><code>object</code></td>
    <td>Contains the content that is visible to portal consumers including the themes, display names, and description.</td>
</tr>
<tr>
    <td><CopyableCode code="PortalId" /></td>
    <td><code>string</code></td>
    <td>The portal identifier. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Preview" /></td>
    <td><code>object</code></td>
    <td>Represents the preview endpoint and the any possible error messages during preview generation.</td>
</tr>
<tr>
    <td><CopyableCode code="PublishStatus" /></td>
    <td><code>string</code></td>
    <td>The publish status. (PUBLISHED, PUBLISH_IN_PROGRESS, PUBLISH_FAILED, DISABLE_IN_PROGRESS, DISABLE_FAILED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="RumAppMonitorName" /></td>
    <td><code>string</code></td>
    <td>The CloudWatch RUM app monitor name.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusException" /></td>
    <td><code>object</code></td>
    <td>The status exception information.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
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
    <td><a href="#get_portal"><CopyableCode code="get_portal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a portal.</td>
</tr>
<tr>
    <td><a href="#list_portals"><CopyableCode code="list_portals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists portals.</td>
</tr>
<tr>
    <td><a href="#create_portal"><CopyableCode code="create_portal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointConfiguration"><code>EndpointConfiguration</code></a>, <a href="#parameter-PortalContent"><code>PortalContent</code></a></td>
    <td></td>
    <td>Creates a portal.</td>
</tr>
<tr>
    <td><a href="#update_portal"><CopyableCode code="update_portal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a portal.</td>
</tr>
<tr>
    <td><a href="#delete_portal"><CopyableCode code="delete_portal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a portal.</td>
</tr>
<tr>
    <td><a href="#disable_portal"><CopyableCode code="disable_portal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the publication of a portal portal.</td>
</tr>
<tr>
    <td><a href="#publish_portal"><CopyableCode code="publish_portal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Publishes a portal.</td>
</tr>
<tr>
    <td><a href="#preview_portal"><CopyableCode code="preview_portal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-portal_id"><code>portal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a portal preview.</td>
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
<tr id="parameter-portal_id">
    <td><CopyableCode code="portal_id" /></td>
    <td><code>string</code></td>
    <td>The portal identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_portal"
    values={[
        { label: 'get_portal', value: 'get_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="get_portal">

Gets a portal.

```sql
SELECT
Authorization,
EndpointConfiguration,
IncludedPortalProductArns,
LastModified,
LastPublished,
LastPublishedDescription,
PortalArn,
PortalContent,
PortalId,
Preview,
PublishStatus,
RumAppMonitorName,
StatusException,
Tags
FROM aws.apigatewayv2.portals
WHERE portal_id = '{{ portal_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_portals">

Lists portals.

```sql
SELECT
Authorization,
EndpointConfiguration,
IncludedPortalProductArns,
LastModified,
LastPublished,
LastPublishedDescription,
PortalArn,
PortalContent,
PortalId,
Preview,
PublishStatus,
RumAppMonitorName,
StatusException,
Tags
FROM aws.apigatewayv2.portals
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portal"
    values={[
        { label: 'create_portal', value: 'create_portal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portal">

Creates a portal.

```sql
INSERT INTO aws.apigatewayv2.portals (
Authorization,
EndpointConfiguration,
IncludedPortalProductArns,
LogoUri,
PortalContent,
RumAppMonitorName,
Tags,
region
)
SELECT 
'{{ Authorization }}',
'{{ EndpointConfiguration }}' /* required */,
'{{ IncludedPortalProductArns }}',
'{{ LogoUri }}',
'{{ PortalContent }}' /* required */,
'{{ RumAppMonitorName }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Authorization,
EndpointConfiguration,
IncludedPortalProductArns,
LastModified,
LastPublished,
LastPublishedDescription,
PortalArn,
PortalContent,
PortalId,
PublishStatus,
RumAppMonitorName,
StatusException,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portals
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portals resource.
    - name: Authorization
      description: |
        Represents an authorization configuration for a portal.
      value:
        CognitoConfig:
          AppClientId: "{{ AppClientId }}"
          UserPoolArn: "{{ UserPoolArn }}"
          UserPoolDomain: "{{ UserPoolDomain }}"
        None: "{{ None }}"
    - name: EndpointConfiguration
      description: |
        Represents an endpoint configuration.
      value:
        AcmManaged:
          CertificateArn: "{{ CertificateArn }}"
          DomainName: "{{ DomainName }}"
        None: "{{ None }}"
    - name: IncludedPortalProductArns
      value:
        - "{{ IncludedPortalProductArns }}"
    - name: LogoUri
      value: "{{ LogoUri }}"
    - name: PortalContent
      description: |
        Contains the content that is visible to portal consumers including the themes, display names, and description.
      value:
        Description: "{{ Description }}"
        DisplayName: "{{ DisplayName }}"
        Theme:
          CustomColors:
            AccentColor: "{{ AccentColor }}"
            BackgroundColor: "{{ BackgroundColor }}"
            ErrorValidationColor: "{{ ErrorValidationColor }}"
            HeaderColor: "{{ HeaderColor }}"
            NavigationColor: "{{ NavigationColor }}"
            TextColor: "{{ TextColor }}"
          LogoLastUploaded: "{{ LogoLastUploaded }}"
    - name: RumAppMonitorName
      value: "{{ RumAppMonitorName }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_portal"
    values={[
        { label: 'update_portal', value: 'update_portal' }
    ]}
>
<TabItem value="update_portal">

Updates a portal.

```sql
UPDATE aws.apigatewayv2.portals
SET 
Authorization = '{{ Authorization }}',
EndpointConfiguration = '{{ EndpointConfiguration }}',
IncludedPortalProductArns = '{{ IncludedPortalProductArns }}',
LogoUri = '{{ LogoUri }}',
PortalContent = '{{ PortalContent }}',
RumAppMonitorName = '{{ RumAppMonitorName }}'
WHERE 
portal_id = '{{ portal_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Authorization,
EndpointConfiguration,
IncludedPortalProductArns,
LastModified,
LastPublished,
LastPublishedDescription,
PortalArn,
PortalContent,
PortalId,
Preview,
PublishStatus,
RumAppMonitorName,
StatusException,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portal"
    values={[
        { label: 'delete_portal', value: 'delete_portal' }
    ]}
>
<TabItem value="delete_portal">

Deletes a portal.

```sql
DELETE FROM aws.apigatewayv2.portals
WHERE portal_id = '{{ portal_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_portal"
    values={[
        { label: 'disable_portal', value: 'disable_portal' },
        { label: 'publish_portal', value: 'publish_portal' },
        { label: 'preview_portal', value: 'preview_portal' }
    ]}
>
<TabItem value="disable_portal">

Deletes the publication of a portal portal.

```sql
EXEC aws.apigatewayv2.portals.disable_portal 
@portal_id='{{ portal_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="publish_portal">

Publishes a portal.

```sql
EXEC aws.apigatewayv2.portals.publish_portal 
@portal_id='{{ portal_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Description": "{{ Description }}"
}'
;
```
</TabItem>
<TabItem value="preview_portal">

Creates a portal preview.

```sql
EXEC aws.apigatewayv2.portals.preview_portal 
@portal_id='{{ portal_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
