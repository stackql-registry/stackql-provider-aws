--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationTemplates" /></td>
    <td><code>string</code></td>
    <td>The names of the configuration templates associated with this application.</td>
</tr>
<tr>
    <td><CopyableCode code="DateCreated" /></td>
    <td><code>string</code></td>
    <td>The date when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DateUpdated" /></td>
    <td><code>string</code></td>
    <td>The date when the application was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>User-defined description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceLifecycleConfig" /></td>
    <td><code>string</code></td>
    <td>The lifecycle settings for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="Versions" /></td>
    <td><code>string</code></td>
    <td>The names of the versions for this application.</td>
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
    <td><a href="#describe_applications"><CopyableCode code="describe_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationNames"><code>ApplicationNames</code></a></td>
    <td>Returns the descriptions of existing applications.</td>
</tr>
<tr>
    <td><a href="#create_configuration_template"><CopyableCode code="create_configuration_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SolutionStackName"><code>SolutionStackName</code></a>, <a href="#parameter-PlatformArn"><code>PlatformArn</code></a>, <a href="#parameter-SourceConfiguration"><code>SourceConfiguration</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings. Templates aren't associated with any environment. The EnvironmentName response element is always null. Related Topics DescribeConfigurationOptions DescribeConfigurationSettings ListAvailableSolutionStacks</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ResourceLifecycleConfig"><code>ResourceLifecycleConfig</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an application that has one configuration template named default and no application versions.</td>
</tr>
<tr>
    <td><a href="#update_application_resource_lifecycle"><CopyableCode code="update_application_resource_lifecycle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-ResourceLifecycleConfig"><code>ResourceLifecycleConfig</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies lifecycle settings for an application.</td>
</tr>
<tr>
    <td><a href="#update_configuration_template"><CopyableCode code="update_configuration_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-OptionsToRemove"><code>OptionsToRemove</code></a></td>
    <td>Updates the specified configuration template to have the specified properties or configuration option values. If a property (for example, ApplicationName) is not provided, its value remains unchanged. To clear such properties, specify an empty string. Related Topics DescribeConfigurationOptions</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a></td>
    <td>Updates the specified application to have the specified properties. If a property (for example, description) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_template"><CopyableCode code="delete_configuration_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configuration template. When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TerminateEnvByForce"><code>TerminateEnvByForce</code></a></td>
    <td>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket. You cannot delete an application that has a running environment.</td>
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
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application to delete.</td>
</tr>
<tr id="parameter-ResourceLifecycleConfig">
    <td><CopyableCode code="ResourceLifecycleConfig" /></td>
    <td><code>object</code></td>
    <td>The lifecycle configuration.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration template to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationNames">
    <td><CopyableCode code="ApplicationNames" /></td>
    <td><code>array</code></td>
    <td>If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A new description for the application. Default: If not specified, AWS Elastic Beanstalk does not update the description.</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.</td>
</tr>
<tr id="parameter-OptionSettings">
    <td><CopyableCode code="OptionSettings" /></td>
    <td><code>array</code></td>
    <td>A list of configuration option settings to update with the new specified option value.</td>
</tr>
<tr id="parameter-OptionsToRemove">
    <td><CopyableCode code="OptionsToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of configuration options to remove from the configuration set. Constraint: You can remove only UserDefined configuration options.</td>
</tr>
<tr id="parameter-PlatformArn">
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom platform. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide. If you specify PlatformArn, then don't specify SolutionStackName.</td>
</tr>
<tr id="parameter-ResourceLifecycleConfig">
    <td><CopyableCode code="ResourceLifecycleConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.</td>
</tr>
<tr id="parameter-SolutionStackName">
    <td><CopyableCode code="SolutionStackName" /></td>
    <td><code>string</code></td>
    <td>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration. Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.</td>
</tr>
<tr id="parameter-SourceConfiguration">
    <td><CopyableCode code="SourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration. Values specified in OptionSettings override any values obtained from the SourceConfiguration. You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName. Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Specifies the tags applied to the application. Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.</td>
</tr>
<tr id="parameter-TerminateEnvByForce">
    <td><CopyableCode code="TerminateEnvByForce" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, running environments will be terminated before deleting the application.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

Returns the descriptions of existing applications.

```sql
SELECT
ApplicationArn,
ApplicationName,
ConfigurationTemplates,
DateCreated,
DateUpdated,
Description,
ResourceLifecycleConfig,
Versions
FROM aws.elasticbeanstalk.applications
WHERE region = '{{ region }}' -- required
AND ApplicationNames = '{{ ApplicationNames }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_template"
    values={[
        { label: 'create_configuration_template', value: 'create_configuration_template' },
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_template">

Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings. Templates aren't associated with any environment. The EnvironmentName response element is always null. Related Topics DescribeConfigurationOptions DescribeConfigurationSettings ListAvailableSolutionStacks

```sql
INSERT INTO aws.elasticbeanstalk.applications (
ApplicationName,
TemplateName,
region,
SolutionStackName,
PlatformArn,
SourceConfiguration,
EnvironmentId,
Description,
OptionSettings,
Tags
)
SELECT 
'{{ ApplicationName }}',
'{{ TemplateName }}',
'{{ region }}',
'{{ SolutionStackName }}',
'{{ PlatformArn }}',
'{{ SourceConfiguration }}',
'{{ EnvironmentId }}',
'{{ Description }}',
'{{ OptionSettings }}',
'{{ Tags }}'
RETURNING
ApplicationName,
DateCreated,
DateUpdated,
DeploymentStatus,
Description,
EnvironmentName,
OptionSettings,
PlatformArn,
SolutionStackName,
TemplateName
;
```
</TabItem>
<TabItem value="create_application">

Creates an application that has one configuration template named default and no application versions.

```sql
INSERT INTO aws.elasticbeanstalk.applications (
ApplicationName,
region,
Description,
ResourceLifecycleConfig,
Tags
)
SELECT 
'{{ ApplicationName }}',
'{{ region }}',
'{{ Description }}',
'{{ ResourceLifecycleConfig }}',
'{{ Tags }}'
RETURNING
ApplicationArn,
ApplicationName,
ConfigurationTemplates,
DateCreated,
DateUpdated,
Description,
ResourceLifecycleConfig,
Versions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: ApplicationName
      value: "{{ ApplicationName }}"
      description: Required parameter for the applications resource.
    - name: TemplateName
      value: "{{ TemplateName }}"
      description: Required parameter for the applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: SolutionStackName
      value: "{{ SolutionStackName }}"
      description: The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration. Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.
      description: The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration. Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.
    - name: PlatformArn
      value: "{{ PlatformArn }}"
      description: The Amazon Resource Name (ARN) of the custom platform. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide. If you specify PlatformArn, then don't specify SolutionStackName.
      description: The Amazon Resource Name (ARN) of the custom platform. For more information, see Custom Platforms in the AWS Elastic Beanstalk Developer Guide. If you specify PlatformArn, then don't specify SolutionStackName.
    - name: SourceConfiguration
      value: "{{ SourceConfiguration }}"
      description: An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration. Values specified in OptionSettings override any values obtained from the SourceConfiguration. You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName. Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
      description: An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration. Values specified in OptionSettings override any values obtained from the SourceConfiguration. You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName. Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
    - name: EnvironmentId
      value: "{{ EnvironmentId }}"
      description: The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.
      description: The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.
    - name: Description
      value: "{{ Description }}"
      description: An optional description for this configuration.
      description: An optional description for this configuration.
    - name: OptionSettings
      value: "{{ OptionSettings }}"
      description: Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see Option Values in the AWS Elastic Beanstalk Developer Guide.
      description: Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see Option Values in the AWS Elastic Beanstalk Developer Guide.
    - name: Tags
      value: "{{ Tags }}"
      description: Specifies the tags applied to the configuration template.
      description: Specifies the tags applied to the configuration template.
    - name: ResourceLifecycleConfig
      value: "{{ ResourceLifecycleConfig }}"
      description: Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
      description: Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application_resource_lifecycle"
    values={[
        { label: 'update_application_resource_lifecycle', value: 'update_application_resource_lifecycle' },
        { label: 'update_configuration_template', value: 'update_configuration_template' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application_resource_lifecycle">

Modifies lifecycle settings for an application.

```sql
UPDATE aws.elasticbeanstalk.applications
SET 
-- No updatable properties
WHERE 
ApplicationName = '{{ ApplicationName }}' --required
AND ResourceLifecycleConfig = '{{ ResourceLifecycleConfig }}' --required
AND region = '{{ region }}' --required
RETURNING
ApplicationName,
ResourceLifecycleConfig;
```
</TabItem>
<TabItem value="update_configuration_template">

Updates the specified configuration template to have the specified properties or configuration option values. If a property (for example, ApplicationName) is not provided, its value remains unchanged. To clear such properties, specify an empty string. Related Topics DescribeConfigurationOptions

```sql
UPDATE aws.elasticbeanstalk.applications
SET 
-- No updatable properties
WHERE 
ApplicationName = '{{ ApplicationName }}' --required
AND TemplateName = '{{ TemplateName }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND OptionSettings = '{{ OptionSettings}}'
AND OptionsToRemove = '{{ OptionsToRemove}}'
RETURNING
ApplicationName,
DateCreated,
DateUpdated,
DeploymentStatus,
Description,
EnvironmentName,
OptionSettings,
PlatformArn,
SolutionStackName,
TemplateName;
```
</TabItem>
<TabItem value="update_application">

Updates the specified application to have the specified properties. If a property (for example, description) is not provided, the value remains unchanged. To clear these properties, specify an empty string.

```sql
UPDATE aws.elasticbeanstalk.applications
SET 
-- No updatable properties
WHERE 
ApplicationName = '{{ ApplicationName }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
RETURNING
ApplicationArn,
ApplicationName,
ConfigurationTemplates,
DateCreated,
DateUpdated,
Description,
ResourceLifecycleConfig,
Versions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_template"
    values={[
        { label: 'delete_configuration_template', value: 'delete_configuration_template' },
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_configuration_template">

Deletes the specified configuration template. When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.

```sql
DELETE FROM aws.elasticbeanstalk.applications
WHERE ApplicationName = '{{ ApplicationName }}' --required
AND TemplateName = '{{ TemplateName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application">

Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket. You cannot delete an application that has a running environment.

```sql
DELETE FROM aws.elasticbeanstalk.applications
WHERE ApplicationName = '{{ ApplicationName }}' --required
AND region = '{{ region }}' --required
AND TerminateEnvByForce = '{{ TerminateEnvByForce }}'
;
```
</TabItem>
</Tabs>
